import { LOCALE } from '@/constants';

export const formatDate = (date: Date) => new Date(date).toLocaleDateString(LOCALE);
