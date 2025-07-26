# 🍕 Next Pizza App

Добро пожаловать в **Next Pizza App** — современное полнофункциональное веб-приложение для заказа пиццы, построенное на базе Next.js 15 с использованием передовых технологий.

![Pizza App](https://img.shields.io/badge/Next.js-15.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=for-the-badge&logo=typescript)
![Prisma](https://img.shields.io/badge/Prisma-6.5-2D3748?style=for-the-badge&logo=prisma)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 🚀 Особенности проекта

### 🛍️ Функциональность для пользователей

- 📱 **Адаптивный дизайн** - полная поддержка мобильных устройств
- 🍕 **Каталог пиццы** - просмотр меню с различными видами пиццы
- 🛒 **Корзина покупок** - добавление товаров и управление заказом
- 💳 **Система заказов** - полный цикл оформления заказа
- 🔍 **Поиск и фильтрация** - быстрый поиск по продуктам
- 👤 **Аутентификация** - регистрация и авторизация пользователей
- 📧 **Email уведомления** - подтверждение заказов

### 🎨 UI/UX

- ✨ **Современный интерфейс** с использованием Shadcn/UI
- 🎭 **Модальные окна** и интерактивные элементы
- 🎨 **Анимации** и плавные переходы
- 🌙 **Оптимизированная производительность**

### 🔧 Архитектурные особенности

- 🏗️ **App Router** (Next.js 15)
- 🗄️ **PostgreSQL** с Prisma ORM
- 🔄 **Server Actions** для обработки форм
- 📊 **TypeScript** для типизации
- 🔒 **NextAuth.js** для аутентификации

---

## 🛠️ Технологический стек

### Frontend

- **[Next.js 15](https://nextjs.org/)** - React фреймворк с App Router
- **[React 19](https://react.dev/)** - библиотека для создания пользовательских интерфейсов
- **[TypeScript](https://www.typescriptlang.org/)** - типизированный JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - CSS фреймворк
- **[Shadcn/UI](https://ui.shadcn.com/)** - компоненты пользовательского интерфейса
- **[Lucide React](https://lucide.dev/)** - иконки

### Backend & Database

- **[Prisma](https://www.prisma.io/)** - ORM для работы с базой данных
- **[PostgreSQL](https://www.postgresql.org/)** - реляционная база данных
- **[NextAuth.js](https://next-auth.js.org/)** - аутентификация

### State Management & Forms

- **[Zustand](https://github.com/pmndrs/zustand)** - управление состоянием
- **[React Hook Form](https://react-hook-form.com/)** - работа с формами
- **[Zod](https://zod.dev/)** - валидация схем

### Additional Tools

- **[Axios](https://axios-http.com/)** - HTTP клиент
- **[React Hot Toast](https://react-hot-toast.com/)** - уведомления
- **[Resend](https://resend.com/)** - отправка email
- **[ESLint](https://eslint.org/)** - линтер кода

---

## 📁 Структура проекта

```
next-app-pizza/
├── app/                    # App Router (Next.js 15)
│   ├── (root)/            # Главная страница
│   ├── (dashboard)/       # Панель администратора
│   ├── (checkout)/        # Страница оформления заказа
│   └── api/               # API маршруты
├── components/            # React компоненты
│   ├── shared/           # Переиспользуемые компоненты
│   └── ui/               # UI компоненты (Shadcn/UI)
├── hooks/                # Пользовательские хуки
├── lib/                  # Утилиты и хелперы
├── prisma/               # Схема базы данных и миграции
├── services/             # API сервисы
└── store/                # Zustand стор
```

---

## ⚙️ Установка и запуск

### Предварительные требования

Убедитесь, что у вас установлены:

- **Node.js** версии 18.0 или выше
- **npm**, **yarn** или **pnpm**
- **PostgreSQL** (локально или в облаке)

### Пошаговая установка

1. **Клонирование репозитория**

   ```bash
   git clone https://github.com/Server-1205/next-app-pizza.git
   cd next-app-pizza
   ```

2. **Установка зависимостей**

   ```bash
   npm install
   # или
   yarn install
   # или
   pnpm install
   ```

3. **Настройка переменных окружения**

   Создайте файл `.env` в корне проекта:

   ```env
   # Database
   DATABASE_URL="postgresql://username:password@localhost:5432/pizza_db"

   # NextAuth.js
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"

   # Email (Resend)
   RESEND_API_KEY="your-resend-api-key"

   # Other services
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   ```

4. **Настройка базы данных**

   ```bash
   # Применить миграции
   npm run prisma:push

   # Заполнить базу тестовыми данными
   npm run prisma:seed

   # Открыть Prisma Studio (опционально)
   npm run prisma:studio
   ```

5. **Запуск проекта**

   ```bash
   # Development сервер с Turbopack
   npm run dev

   # Production сборка
   npm run build
   npm run start
   ```

6. **Открыть приложение**

   Перейдите на [http://localhost:3000](http://localhost:3000) в вашем браузере

---

## 📜 Доступные команды

### Разработка

```bash
npm run dev          # Запуск dev сервера с Turbopack
npm run build        # Сборка для production
npm run start        # Запуск production сервера
npm run lint         # Проверка кода ESLint
```

### База данных (Prisma)

```bash
npm run prisma:push      # Применить изменения схемы к БД
npm run prisma:generate  # Генерация Prisma Client
npm run prisma:studio    # Открыть Prisma Studio
npm run prisma:seed      # Заполнить БД тестовыми данными
npm run prisma:reset     # Сброс БД и повторная миграция
npm run prisma:format    # Форматирование schema.prisma
```

---

## 🚀 Деплой

### Vercel (рекомендуется)

1. Подключите репозиторий к [Vercel](https://vercel.com)
2. Добавьте переменные окружения в настройках проекта
3. Настройте PostgreSQL базу данных (например, [Supabase](https://supabase.com) или [PlanetScale](https://planetscale.com))

### Другие платформы

Проект совместим с любыми платформами, поддерживающими Next.js:

- Railway
- DigitalOcean
- AWS
- Google Cloud Platform

---

## 🤝 Участие в разработке

1. Сделайте Fork репозитория
2. Создайте ветку для новой функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Add amazing feature'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

---

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. Подробности в файле [LICENSE](LICENSE).

---

## 👤 Автор

**Server-1205**

- GitHub: [@Server-1205](https://github.com/Server-1205)

---

## 🙏 Благодарности

- [Next.js](https://nextjs.org/) команде за отличный фреймворк
- [Shadcn](https://twitter.com/shadcn) за великолепные UI компоненты
- [Vercel](https://vercel.com/) за хостинг и инструменты разработки

---

<div align="center">
  <p>Сделано с ❤️ и ☕</p>
  
  ⭐ Поставьте звездочку, если проект был полезен!
</div>
