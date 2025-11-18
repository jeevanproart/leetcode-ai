/**
 * List of valid models that can be used in the application.
 */
export const VALID_MODELS = [
  {
    model: 'gemini-2.5-flash',
    name: 'gemini_2_5_flash',
    display: 'Gemini 2.5 Flash',
  },
  {
    model: 'gemini-2.5-pro',
    name: 'gemini_2_5_pro',
    display: 'Gemini 2.5 Pro',
  },
  {
    model: 'gemini-1.5-pro',
    name: 'gemini_1_5_pro',
    display: 'Gemini 1.5 Pro',
  },
  {
    model: 'gemini-1.5-flash',
    name: 'gemini_1_5_flash',
    display: 'Gemini 1.5 Flash',
  },
]

/**
 * Type of valid models that can be used in the application.
 */
export type ValidModel = 'gemini_2_5_flash' | 'gemini_2_5_pro' | 'gemini_1_5_pro' | 'gemini_1_5_flash'
