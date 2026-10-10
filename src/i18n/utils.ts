import { ui, defaultLang, type SupportedLanguage, type UIKey } from './ui';

export function getLangFromUrl(url: URL): SupportedLanguage {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as SupportedLanguage;
  return defaultLang;
}

export function useTranslations(lang: SupportedLanguage) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export type Translator = ReturnType<typeof useTranslations>;

export function getLocalizedPath(pathname: string, targetLang: SupportedLanguage): string {
  const segments = pathname.split('/').filter(Boolean);
  
  // Remover locale previo si existe
  if (segments[0] === 'en' || segments[0] === 'es') {
    segments.shift();
  }

  const cleanPath = segments.join('/');

  if (targetLang === defaultLang) {
    return `/${cleanPath}`;
  }
  return `/${targetLang}/${cleanPath}`;
}