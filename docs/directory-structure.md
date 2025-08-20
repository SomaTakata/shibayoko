# Portfolio Directory Structure

## Project Overview
This portfolio follows a feature-based architecture with clear separation of concerns for scalability and maintainability.

## Directory Structure

```
portfolio/
├── .claude/                   # 🤖 Claude AI settings
├── .github/                   # 🔧 GitHub settings  
├── .vscode/                   # 📝 VSCode settings
├── docs/                      # 📚 Documentation
├── public/                    # 🌐 Static files
├── src/                       # 💻 Application source
│   ├── app/                   # 🚀 Next.js App Router (routing only)
│   ├── components/            # 🧩 Reusable components
│   │   ├── layout/            # Layout components
│   │   ├── shared/            # Cross-feature shared components
│   │   └── ui/                # shadcn/ui components
│   ├── constants/             # 📋 Constants & configuration
│   ├── features/              # 🎛️ Feature modules (self-contained)
│   │   ├── experience/        # Experience timeline feature
│   │   ├── skills/            # Skills showcase feature
│   │   ├── projects/          # Projects portfolio feature
│   │   ├── news/              # News and updates feature
│   │   ├── terminal/          # Interactive terminal feature
│   │   └── activity/          # Activity tracking feature
│   ├── hooks/                 # 🎣 Global shared hooks
│   ├── lib/                   # 📚 Libraries & utilities
│   ├── stores/                # 🏪 State management (Zustand)
│   ├── types/                 # 📝 Global type definitions
│   └── utils/                 # 🔧 Global utilities
├── .env.example               # 📋 Environment template
└── README.md                  # 📖 Project overview
```

## Feature Module Structure

Each feature in `src/features/` follows this pattern:

```
feature-name/
├── components/                # Feature-specific components
├── hooks/                     # Feature-specific hooks
├── types/                     # Feature-specific types
├── utils/                     # Feature-specific utilities
├── constants/                 # Feature-specific constants
└── index.ts                   # Feature exports
```

## Naming Conventions

- **Components**: PascalCase (`TimelineItem.tsx`)
- **Hooks**: camelCase (`useExperience.ts`)
- **Utilities**: camelCase (`formatDate.ts`)
- **Constants**: UPPER_SNAKE_CASE (`EXPERIENCE_DATA.ts`)
- **Types**: PascalCase (`ExperienceItem.ts`)
- **Stores**: camelCase + Store (`experienceStore.ts`)

## Import Conventions

```typescript
// Absolute imports with path mapping
import { Button } from "@/components/ui/Button";
import { useExperienceStore } from "@/stores/experienceStore";
import { EXPERIENCE_DATA } from "@/constants/experience";

// Feature imports
import { ExperienceTimeline } from "@/features/experience/components/ExperienceTimeline";
import { useExperience } from "@/features/experience/hooks/useExperience";
```