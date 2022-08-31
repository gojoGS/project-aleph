import { LengthConstraint } from "./common";

export interface ModuleConstraint {
  form: {
    title: LengthConstraint,
    description: LengthConstraint
  },
  display: {
    title: LengthConstraint,
    description: LengthConstraint
  }
}

export const moduleConstraint: ModuleConstraint = {
  form: {
    title: {
      min: 1,
      max: 64
    },
    description: {
      min: 1,
      max: 255
    }
  },
  display: {
    title: {
      min: 1,
      max: 32,
    },
    description: {
      min: 1,
      max: 144
    }
  }
}