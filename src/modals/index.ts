import { ModalInterface } from '@/interface/ModalInterface'
import { ValidModel } from '@/constants/valid_modals'

import { GeminiAI_2_5_flash } from '@/modals/modal/GeminiAI_2_5_flash'
import { GeminiAI_2_5_pro } from '@/modals/modal/GeminiAI_2_5_pro'
import { GeminiAI_1_5_pro } from '@/modals/modal/GeminiAI_1_5_pro'
import { GeminiAI_1_5_flash } from '@/modals/modal/GeminiAI_1_5_flash'

/**
 * This object contains all the modals that are available in the extension.
 * @type {Record<ValidModel, ModalInterface>}
 */
export const modals: Record<ValidModel, ModalInterface> = {
  'gemini_2_5_flash': new GeminiAI_2_5_flash(),
  'gemini_2_5_pro': new GeminiAI_2_5_pro(),
  'gemini_1_5_pro': new GeminiAI_1_5_pro(),
  'gemini_1_5_flash': new GeminiAI_1_5_flash(),
}
