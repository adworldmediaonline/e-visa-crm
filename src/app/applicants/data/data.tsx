import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  BadgeCheck,
  CheckCircle,
  Clock1,
  Loader,
} from 'lucide-react';

export const labels = [
  {
    value: 'bug',
    label: 'Bug',
  },
  {
    value: 'feature',
    label: 'Feature',
  },
  {
    value: 'documentation',
    label: 'Documentation',
  },
];

export const statuses = [
  // {
  //   value: 'backlog',
  //   label: 'Backlog',
  //   icon: HelpCircle,
  // },
  // {
  //   value: 'todo',
  //   label: 'Todo',
  //   icon: CircleIcon,
  // },
  {
    value: 'incomplete',
    label: 'Incomplete',
    icon: Clock1,
  },
  {
    value: 'pendingPayment',
    label: 'PendingPayment',
    icon: Clock1,
  },

  {
    value: 'pending',
    label: 'Pending',
    icon: Clock1,
  },
  {
    value: 'underProcess',
    label: 'UnderProcess',
    icon: Loader,
  },
  {
    value: 'verify',
    label: 'Verify',
    icon: BadgeCheck,
  },
  {
    value: 'visaSent',
    label: 'VisaSent',
    icon: CheckCircle,
  },
];

export const priorities = [
  {
    label: 'Normal',
    value: 'Normal',
    icon: ArrowDown,
  },
  {
    label: 'Urgent',
    value: 'Urgent',
    icon: ArrowRight,
  },
  {
    label: 'Rush',
    value: 'Rush',
    icon: ArrowUp,
  },
];

export const lastExitStepUrls = [
  {
    label: '/visa/step-two',
    value: '/visa/step-two',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-three',
    value: '/visa/step-three',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-four',
    value: '/visa/step-four',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-five',
    value: '/visa/step-five',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-six',
    value: '/visa/step-six',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-seven',
    value: '/visa/step-seven',
    icon: ArrowDown,
  },
  {
    label: '/visa/step-eight',
    value: '/visa/step-eight',
    icon: ArrowDown,
  },
  {
    label: 'notFound',
    value: 'notFound',
    icon: ArrowDown,
  },
];
