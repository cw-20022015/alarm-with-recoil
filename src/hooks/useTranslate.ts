import { FallbackNs, useTranslation, UseTranslationOptions } from 'react-i18next';
import { FlatNamespace, KeyPrefix } from 'i18next';
import { $Tuple } from 'react-i18next/helpers';

export default function useTranslate<Ns extends FlatNamespace | $Tuple<FlatNamespace> | undefined = undefined, KPrefix extends KeyPrefix<FallbackNs<Ns>> = undefined>(
  translateItem: string,
  options?: UseTranslationOptions<KPrefix>,
) {
  const { t } = useTranslation();

  if (options) {
    return `${t(translateItem, options)}`;
  }
  return `${t(translateItem)}`;
}
