# Monorepo Template

A modern, scalable monorepo template for Expo applications and Next.js web applications using Turborepo, shared components and utilities by react-native-web, nativewind and typescript.

## Tech Stack

### Core Technologies

- 🏗️ [Turborepo](https://turbo.build/) - Monorepo management
- ⚛️ [React Native](https://reactnative.dev/) - Mobile development
- 📱 [Expo](https://expo.dev/) - React Native framework
- 🌐 [Next.js](https://nextjs.org/) - Web application framework
- 🎨 [NativeWind](https://www.nativewind.dev/) - TailwindCSS for React Native
- 📝 [TypeScript](https://www.typescriptlang.org/) - Type safety

### Testing & Quality

- 🧪 [Jest](https://jestjs.io/) - Testing framework
- 🔍 [ESLint](https://eslint.org/) - Code linting
- ✨ [Prettier](https://prettier.io/) - Code formatting

## Project Structure

```
apps/
  ├── native/               # React Native mobile app
  │   ├── src/
  │   └── expo/
  └── web/                  # Next.js web app
      ├── src/
      └── public/

packages/
  ├── ui/                   # Shared UI components
  ├── typescript-config/    # Shared TypeScript configs
  ├── eslint-config/        # Shared ESLint configs
  └── jest-config/          # Shared Jest configs
```

## Key Features

- 📱 Cross-platform development (iOS, Android, Web)
- 🎨 Shared UI component library
- 🔄 Hot Module Replacement (HMR)
- 📦 Optimized build system
- 🧪 Testing infrastructure
- 🔍 Type checking and linting
- 📚 Shared configurations

## Getting Started

1. Clone the repository:

```bash
git clone [repository-url]
```

2. Install dependencies:

```bash
pnpm install
```

3. Start development:

```bash
# For mobile development
pnpm dev -F native

# For web development
pnpm dev -F web
```

## Available Scripts

- `pnpm build` - Build all apps and packages
- `pnpm dev` - Start development servers
- `pnpm lint` - Lint all files
- `pnpm test` - Run tests
- `pnpm clean` - Clean build outputs

## Development Guidelines

- Use TypeScript for all new code
- Follow the provided ESLint configuration
- Write tests for new features
- Use NativeWind for styling
- Follow the component structure in `packages/ui`

## Contributing

1. Create a new branch
2. Make your changes
3. Submit a pull request

## License

MIT
