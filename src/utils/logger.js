/**
 * Logger utility for consistent logging across the application
 */

const isDevelopment = import.meta.env.DEV;

const logger = {
  log: (...args) => {
    if (isDevelopment) {
      console.log('[APP]', ...args);
    }
  },
  
  error: (...args) => {
    console.error('[ERROR]', ...args);
  },
  
  warn: (...args) => {
    if (isDevelopment) {
      console.warn('[WARN]', ...args);
    }
  },
  
  info: (...args) => {
    if (isDevelopment) {
      console.info('[INFO]', ...args);
    }
  },
  
  debug: (...args) => {
    if (isDevelopment) {
      console.debug('[DEBUG]', ...args);
    }
  },

  // Group logs for better organization
  group: (label) => {
    if (isDevelopment) {
      console.group(`[GROUP] ${label}`);
    }
  },

  groupEnd: () => {
    if (isDevelopment) {
      console.groupEnd();
    }
  },

  // Table logs for data visualization
  table: (data) => {
    if (isDevelopment) {
      console.table(data);
    }
  },

  // Time tracking
  time: (label) => {
    if (isDevelopment) {
      console.time(`[TIMER] ${label}`);
    }
  },

  timeEnd: (label) => {
    if (isDevelopment) {
      console.timeEnd(`[TIMER] ${label}`);
    }
  },
};

export default logger;
