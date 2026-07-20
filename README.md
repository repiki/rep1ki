# REPIKI

Многостраничное портфолио на Next.js App Router, TypeScript и CSS. Сайт собран вокруг данных в `data/site.ts`.

## Запуск

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run build
npm run start
```

## Где менять контент

- Контакты, Telegram и email: `data/site.ts`.
- Навигация: `data/site.ts`.
- Проекты и ссылка на AQUA: `data/site.ts`, поле `href`.
- Тексты страниц: соответствующие файлы в `app/`.
- Визуальный токены: `app/globals.css`.

## Продакшн-форма

Сейчас форма валидирует поля локально и честно сообщает о демонстрационном режиме. Для реальной отправки замените обработчик `handleSubmit` в `components/ui/ContactForm.tsx` на запрос к API route, Telegram Bot API или почтовому сервису. Не добавляйте секреты в клиентский код.

## Изображения и motion

Карточка AQUA использует абстрактное CSS-превью. Для замены добавьте оптимизированную картинку в `public/` и используйте `next/image` в компоненте карточки. Уменьшить motion можно через `prefers-reduced-motion` в `app/globals.css`; правило уже отключает анимации. Three.js в этой версии не подключён: для этого легковесного визуального языка он не нужен и не влияет на остальную сборку.

## Деплой

На Vercel импортируйте репозиторий, оставьте команды по умолчанию (`npm run build`) и задайте настоящий домен в `app/layout.tsx`, `app/sitemap.ts` и `app/robots.ts`.
