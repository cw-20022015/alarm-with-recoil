import { FormatDateOptions, useIntl } from 'react-intl';

/**
 * useFormatMessage
 * @param {string} id A unique, stable identifier for the message
 * @param {string} description context for the translator about how it's used in the UI
 * @param {string | object} defaultMessage The default message (probably in English)
 * @returns {string}
 */
export const formatMessageUtil = (id: string, defaultMessage?: string, description?: string | object) => {
  const { formatMessage } = useIntl();

  if (defaultMessage || description) {
    return `${formatMessage({
      id,
      defaultMessage,
      description,
    })}`;
  }
  return `${formatMessage({
    id,
  })}`;
};

/**
 * formatDateUtil
 * @param {Date | number | undefined | string} value translate value
 * @param {FormatDateOptions} opts
 * @returns {string}
 * */
export const formatDateUtil = (value: Date | number | undefined | string, opts?: FormatDateOptions) => {
  const { formatDate } = useIntl();

  if (opts) {
    return `${formatDate(value, opts)}`;
  }
  return `${formatDate(value)}`;
};

/**
 * formatTimeUtil
 * @param {Date | number | undefined | string} value translate value
 * @param {Intl.DateTimeFormatOptions & { format?: string }} options
 * @returns {string}
 * */
export const formatTimeUtil = (value: number | Date, options?: Intl.DateTimeFormatOptions & { format?: string }) => {
  const { formatTime } = useIntl();

  if (options) {
    return `${formatTime(value, options)}`;
  }
  return `${formatTime(value)}`;
};

export default { formatMessageUtil, formatDateUtil, formatTimeUtil };
