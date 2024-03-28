<template>
  <!-- Steps Block-->
  <div
    class="flex flex-col items-center justify-center gap-4 pt-1 pb-2"
    :style="{ fontSize: size + 'px' }"
  >
    <div class="relative flex justify-between gap-[2.5em] py-1">
      <div
        v-for="(step, index) in steps"
        :key="step.stepid"
        class="relative z-10 flex flex-col items-center gap-5 transition-all duration-500"
      >
        <!--Step (Outer Circle)-->
        <div
          class="relative flex h-[2em] w-[2em] items-center justify-center rounded-[4em] bg-opacity-20"
          :class="stateColors[WizardStep[stepState[index] ?? 0].toLowerCase()]"
        >
          <!--Step (Inner Circle)-->
          <div
            class="h-[1em] w-[1em] rounded-[4em]"
            :class="[
              stateColors[WizardStep[stepState[index] ?? 0].toLowerCase()],
              (stepState[index] ?? 0) == 0
                ? 'border-[1px] border-gray-400 bg-white'
                : 'border-0',
            ]"
          ></div>

          <!--Step (Inner Circle For animation)-->
          <div
            class="absolute h-[1em] w-[1em] animate-ping rounded-[4em] bg-sky-700"
            :class="[
              (stepState[index] ?? 0) == WizardStep.Active ? 'block' : 'hidden',
            ]"
          ></div>
        </div>
        <!--Title-->
        <div
          class="w-[8rem] overflow-hidden text-center"
          :class="[
            stepState[index] == WizardStep.Active ? 'font-bold' : 'italic',
            showSingleTitle ? 'hidden' : 'block',
          ]"
          :style="{
            'font-size': textSize + 'px',
            'line-height': textSize * 1.5 + 'px',
            'max-height': 6.25 * textSize + 'px',
          }"
        >
          {{ step?.title }}
        </div>
      </div>
      <!--Progress bar-->
      <div
        class="absolute"
        :class="
          showSingleTitle
            ? 'ml-[1em] w-[calc(100%-2em)]'
            : 'ml-[4rem] w-[calc(100%-8rem)]'
        "
      >
        <div class="relative z-0 mt-[calc(1em-(0.25em/2.0))]">
          <!-- Default background-->
          <div class="absolute h-[0.25em] w-full bg-gray-300"></div>
          <!-- Progress Color-->
          <div
            class="absolute left-0 h-[0.25em] bg-sky-400 transition-all duration-300"
            :style="{ width: currentPercentage + '%' }"
          ></div>
        </div>
      </div>
    </div>
    <!--Single title-->
    <span
      class="text-lg text-sky-600"
      :class="showSingleTitle ? 'block' : 'hidden'"
      >{{ steps?.[currentStep]?.title }}</span
    >
  </div>

  <!--Navigator-->
  <div class="my-3" :class="[hideNavControl ? 'hidden' : 'block']">
    <slot name="navigator">
      <div class="flex justify-end gap-3">
        <!-- By default the steps should not be skippable.-->
        <input
          class="wiz-navigator"
          type="button"
          :disabled="!canSkipStep || isProcessing"
          @click="skipCurrent()"
          value="Skip"
        />
        <input
          type="button"
          class="wiz-navigator"
          :disabled="currentStep == 0 || isProcessing"
          @click="goBack()"
          value="Back"
        />
        <input
          type="button"
          class="wiz-navigator"
          @click="validateGoForward()"
          :disabled="isProcessing"
          :value="currentStep + 1 > totalSteps ? 'Complete' : 'Next' "
          :can-complete="currentStep + 1 > totalSteps"
        />
      </div>
    </slot>
  </div>

  <div
    class="flex justify-end gap-2 text-sm text-rose-500"
    v-if="errorMessages != null && errorMessages.length > 0"
  >
    <span v-for="(msg, index) in errorMessages" :key="index">
      {{ index + 1 }}. {{ msg }}</span
    >
  </div>
  <hr class="my-3" />
  <!--Content Block-->
  <div v-if="!formSubmitted">
    <div ref="wizSlot" v-show="!isProcessing" class="wiz-slot my-5">
      <slot></slot>
    </div>
    <div
      v-show="isProcessing"
      class="m-5 flex items-center justify-center gap-5"
    >
      <ProgressLoader :height="60" :width="60" primary-color="orange" />
      <p>Processing.. Please wait..</p>
    </div>
  </div>

  <div v-else class="flex justify-center p-10">
    <div class="flex flex-col items-center gap-5">
      <i class="bi bi-send-check-fill text-[4rem] text-green-600"></i>
      <p>The form has been successfully submitted..</p>
      <p>{{submissionMessage}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WizardStep } from "@/enums";

interface IEmits {
  (e: "interface", value: IFormWizard): void;
  (e: "stepChanged", value: { step: number; uniqueid: string }): void;
  (e: "validateStep", value: IWizardStepValidate): void;
}

interface Props {
  showSingleTitle?: boolean;
  size?: number;
  textSize?: number;
  hideNavigator?: boolean;
  isProcessing?: boolean;
}

const _props = withDefaults(defineProps<Props>(), {
  size: 18,
  textSize: 13,
  isProcessing: false,
});
const hideNavControl = ref<boolean>(_props.hideNavigator ?? false);
const emit = defineEmits<IEmits>();
const wizSlot = ref<HTMLElement>();
const stepState = ref<WizardStep[]>([]);
const currentStep = computed<number>(() => stepState.value.length - 1);
const steps = ref<IFormWizardStep[]>([]);
const formSubmitted = ref<boolean>(false);
const submissionMessage = ref<string>('');
const canSkipStep = computed<boolean>(
  () => steps.value?.[currentStep?.value]?.canSkip
);
const errorMessages = ref<string[]>([]);
const totalSteps = computed<number>(() => {
  return steps.value?.length - 1 ?? 0;
});
const currentPercentage = computed<number>(
  () =>
    (currentStep.value * 100) / (totalSteps.value < 1 ? 1 : totalSteps.value)
);

const stateColors = ref<any>({
  complete: "bg-green-400",
  skipped: "bg-gray-400",
  active: "bg-sky-400",
  // inactive: "bg-gray-500"
});

function activateChild(add_id: string | number, remove_id?: string | number) {
  if (remove_id != undefined) {
    let toRemove = `div.wiz-slot > div.wiz-step[step-id='${remove_id}']`;
    wizSlot.value?.querySelector(toRemove)?.removeAttribute("active");
  }

  let toAdd = `div.wiz-slot > div.wiz-step[step-id='${add_id}']`;
  //add for current
  wizSlot.value?.querySelector(toAdd)?.setAttribute("active", "true");
}

function goBack() {
  clearErrors(); //clear all local errors before moving back.
  if (stepState.value.length < 1) return;
  stepState.value.pop(); //remove current
  stepState.value.pop(); //remove previous
  stepState.value.push(WizardStep.Active); //replace previous with active
  processSlotView(currentStep.value + 1); //remove previous step as we are moving ahead.
}

function submitForm(msg?:string) {
  moveAhead(WizardStep.Complete);
  hideNavControl.value = true;
  formSubmitted.value = true;
  submissionMessage.value = msg ?? '';
}

function validateGoForward() {
  clearErrors();
  let targetStep = steps.value?.find((p) => p.stepid === currentStep.value + 1);
  let targetKey = targetStep?.uniqueid; //Step id starts at 1
  //Forward or Completion Call back
  let lastStep: boolean = currentStep.value + 1 > totalSteps.value;
  let callback = (msg?:string): void => {
    lastStep ? submitForm(msg) : goForward(msg);
  };

  emit("validateStep", <IWizardStepValidate>{
    next: (e) => callback(e),
    uniqueid: targetKey ?? "notfound",
    isLastStep: lastStep,
    error: (e) => addErrorMessage(e),
  });
}

function goForward(msg?:string) {
  clearErrors();
  moveAhead(WizardStep.Complete);
}

function skipCurrent() {
  clearErrors();
  moveAhead(WizardStep.Skipped);
}

function clearErrors() {
  errorMessages.value = [];
}

function addErrorMessage(msg: string) {
  errorMessages.value.push(msg);
}

function moveAhead(newState: WizardStep) {
  try {
    if (
      stepState.value.length == steps.value?.length &&
      stepState.value[steps.value?.length - 1] != WizardStep.Active
    ) {
      return; //only if it is not active, we should not do anything.. In case of active, we should be able to change it to complete.
    }

    stepState.value.pop();
    stepState.value.push(newState);

    if (stepState.value.length < steps.value?.length) {
      stepState.value.push(WizardStep.Active);
    }
  } finally {
    processSlotView(currentStep.value - 1); //remove previous step as we are moving ahead.
  }
}

function processSlotView(remove_id?: number) {
  if (steps.value == undefined) return;
  let activeStep = steps.value[currentStep.value];
  if (activeStep == undefined) return;
  if (remove_id != undefined) {
    let removeStep = steps.value[remove_id]; //
    activateChild(activeStep.stepid, removeStep.stepid);
  } else {
    activateChild(activeStep.stepid);
  }

  //Finally emit event informing the current step back to the parent.
  emit("stepChanged", {
    step: currentStep.value,
    uniqueid: steps.value[currentStep.value].uniqueid,
  });
}

async function extractSteps() {
  let stepQuery = `div.wiz-slot > div.wiz-step`; //All direct children 'div' which has a class of wiz-step assigned.
  let stepchildren = wizSlot.value?.querySelectorAll(stepQuery); //match all.
  if (stepchildren == undefined || stepchildren.length < 1) return;
  let rawSteps = Array.from(stepchildren, (e, index) => {
    return <IFormWizardStep>{
      orderid: index,
      uniqueid: e.getAttribute("uniqueid"),
      order: Number(e.getAttribute("order")),
      title: e.getAttribute("title"),
      canSkip: e.getAttribute("can-skip")?.toLowerCase() == "true",
    };
  }); //Raw steps may contain order which are not properly defined.. may even have some duplicates.

  // console.log(...rawSteps);
  if (rawSteps == undefined) return;
  rawSteps.sort((a, b) => a.order - b.order); //sort by order number.
  // console.log(...rawSteps);
  let stepChildArr = rawSteps.map((p, k) => {
    p.stepid = k + 1; //step id (order in which they should be displayed.)
    return p;
  });

  //add this to the html.
  stepchildren.forEach((p, index) =>
    p.setAttribute(
      "step-id",
      stepChildArr.find((q) => q.orderid == index)?.stepid.toString() ?? "error"
    )
  );
  steps.value = stepChildArr;
}

async function initialize() {
  await extractSteps();
  //On starting, make the first step active.
  stepState.value = [];
  stepState.value.push(WizardStep.Active);
  processSlotView();
}

watch(currentStep, processSlotView);

onMounted(() => {
  emit("interface", <IFormWizard>{
    stepUp: () => goForward(),
    stepUpWithValidate: () => validateGoForward(),
    stepDown: () => goBack(),
    skipStep: () => skipCurrent(),
    addError: (msg) => addErrorMessage(msg),
    clearError: () => clearErrors(),
  });
  initialize();
});
</script>

<style scoped>
div.wiz-slot > :not(div.wiz-step[active]) {
  /* visibility: hidden; */
  display: none;
}

/* div.wiz-slot div[complete] {
  display: block;
  border: solid green 2px;
} */

input.wiz-navigator[type="button"] {
  @apply pointer-events-auto h-8 w-28 cursor-pointer rounded-md bg-sky-500 px-3 text-white transition-colors duration-200 hover:bg-rose-300;
}

input.wiz-navigator[type="button"][can-complete="true"] {
  @apply bg-green-600 hover:bg-green-800;
}

input.wiz-navigator[type="button"][disabled] {
  @apply pointer-events-none border-[1px] border-gray-300 bg-gray-200 text-slate-600 opacity-50;
}
</style>
