'use client'

import { useTranslations } from 'next-intl'

export default function TranslatedContent() {
  const t = useTranslations('copy')

  return (
    <div className="text-center py-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {t('text')}
      </p>
    </div>
  )
}
