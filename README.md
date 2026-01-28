# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```


## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

shearsummit-app/
├── app/                                    # Expo Router app directory
│   ├── (client)/                          # Client-side screens
│   │   ├── _layout.tsx                    # Client layout with tab navigation
│   │   ├── index.tsx                      # Home/Explore screen
│   │   ├── appointments.tsx               # Client appointments screen
│   │   ├── profile.tsx                    # Client profile screen
│   │   └── stylist/
│   │       └── [id].tsx                   # Stylist profile detail screen
│   ├── (stylist)/                         # Stylist-side screens
│   │   ├── _layout.tsx                    # Stylist layout with tab navigation
│   │   ├── dashboard.tsx                  # Stylist dashboard (Today view)
│   │   ├── calendar.tsx                   # Calendar & availability
│   │   ├── profile-edit.tsx               # Profile management
│   │   └── reviews.tsx                    # Reviews & client history
│   ├── (auth)/                            # Authentication screens
│   │   ├── login.tsx                      # Login screen
│   │   ├── signup.tsx                     # Sign up screen
│   │   ├── client-onboarding.tsx          # Client onboarding
│   │   └── stylist-onboarding.tsx         # Stylist onboarding
│   ├── booking/                           # Booking flow
│   │   ├── select-service.tsx             # Step 1: Select service
│   │   ├── select-time.tsx                # Step 2: Select date/time
│   │   └── confirm.tsx                    # Step 3: Confirm booking
│   ├── _layout.tsx                        # Root layout
│   └── index.tsx                          # App entry point
│
├── components/                            # Reusable UI components
│   ├── ui/                                # Core UI components
│   │   ├── Button.tsx                     # Custom button component
│   │   ├── Card.tsx                       # Card component
│   │   ├── Input.tsx                      # Input field component
│   │   ├── Badge.tsx                      # Badge component
│   │   ├── Avatar.tsx                     # Avatar component
│   │   ├── IconButton.tsx                 # Icon button component
│   │   ├── Chip.tsx                       # Chip/tag component
│   │   ├── Rating.tsx                     # Star rating component
│   │   ├── TabBar.tsx                     # Custom tab bar
│   │   └── SearchBar.tsx                  # Search bar component
│   │
│   ├── client/                            # Client-specific components
│   │   ├── StylistCard.tsx                # Stylist preview card
│   │   ├── AppointmentCard.tsx            # Appointment card (client)
│   │   ├── ServiceCard.tsx                # Service selection card
│   │   ├── TimeSlot.tsx                   # Time slot selector
│   │   ├── FilterBar.tsx                  # Filter and sort bar
│   │   ├── PortfolioGrid.tsx              # Portfolio photo grid
│   │   └── ReviewCard.tsx                 # Review display card
│   │
│   ├── stylist/                           # Stylist-specific components
│   │   ├── AppointmentItem.tsx            # Appointment item (stylist)
│   │   ├── DaySchedule.tsx                # Day schedule view
│   │   ├── CalendarView.tsx               # Calendar component
│   │   ├── ServiceForm.tsx                # Service add/edit form
│   │   ├── VoiceAIButton.tsx              # Voice AI feature button
│   │   ├── ClientNoteCard.tsx             # Client notes display
│   │   └── StatsCard.tsx                  # Dashboard stats card
│   │
│   └── shared/                            # Shared components
│       ├── BottomSheet.tsx                # Bottom sheet modal
│       ├── EmptyState.tsx                 # Empty state placeholder
│       ├── LoadingSpinner.tsx             # Loading indicator
│       ├── Header.tsx                     # Screen header
│       └── SafeArea.tsx                   # Safe area wrapper
│
├── constants/                             # App constants
│   ├── Colors.ts                          # Color palette
│   ├── Spacing.ts                         # Spacing scale
│   ├── Typography.ts                      # Typography scale
│   └── Icons.ts                           # Icon mappings
│
├── hooks/                                 # Custom React hooks
│   ├── useResponsive.ts                   # Responsive design hook
│   ├── useColorScheme.ts                  # Dark/light mode hook
│   └── useKeyboard.ts                     # Keyboard awareness hook
│
├── types/                                 # TypeScript type definitions
│   ├── index.ts                           # Main type exports
│   ├── Stylist.ts                         # Stylist types
│   ├── Client.ts                          # Client types
│   ├── Appointment.ts                     # Appointment types
│   └── Service.ts                         # Service types
│
├── utils/                                 # Utility functions
│   ├── formatting.ts                      # Data formatting utilities
│   ├── validation.ts                      # Form validation
│   └── dateTime.ts                        # Date/time helpers
│
├── assets/                                # Static assets
│   ├── images/                            # Image files
│   └── fonts/                             # Custom fonts (if any)
│
├── tailwind.config.js                     # Tailwind configuration
├── app.json                               # Expo configuration
├── package.json                           # Dependencies
├── tsconfig.json                          # TypeScript configuration
└── README.md                              # Project documentation