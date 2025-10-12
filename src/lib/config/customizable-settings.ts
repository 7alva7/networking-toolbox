/**
 * Customizable Settings
 *
 * This file provides default settings that can be overridden via environment variables.
 * All environment variables must be prefixed with NTB_ to be accessible.
 *
 * For self-hosted instances, these can be customized by setting the corresponding
 * environment variables. The managed instance will use the defaults.
 */

import { env } from '$env/dynamic/public';
import type { HomepageLayoutMode } from '$lib/stores/homepageLayout';
import type { NavbarDisplayMode } from '$lib/stores/navbarDisplay';
import type { ThemeOption } from '$lib/stores/theme';

// Site Branding
export const SITE_NAME = env.NTB_SITE_NAME;
export const SITE_TITLE = env.NTB_SITE_TITLE;
export const SITE_DESCRIPTION = env.NTB_SITE_DESCRIPTION;

/**
 * Logo/icon to display in the navbar, specified as a path to an image
 */
export const SITE_ICON = env.NTB_SITE_ICON ?? '';

/**
 * Default homepage layout
 * Options: 'categories', 'default', 'minimal', 'carousel', 'bookmarks', 'small-icons', 'list', 'search', 'empty'
 */
export const DEFAULT_HOMEPAGE_LAYOUT: HomepageLayoutMode =
  (env.NTB_HOMEPAGE_LAYOUT as HomepageLayoutMode) ?? 'categories';

/**
 * Default navbar display mode
 * Options: 'default', 'bookmarked', 'frequent', 'none'
 */
export const DEFAULT_NAVBAR_DISPLAY: NavbarDisplayMode = (env.NTB_NAVBAR_DISPLAY as NavbarDisplayMode) ?? 'default';

/**
 * Default theme
 * Options: 'dark', 'light', 'midnight', 'arctic', 'ocean', 'purple', 'cyberpunk', 'terminal', 'lightpurple', 'muteddark', 'solarized'
 */
export const DEFAULT_THEME: ThemeOption = (env.NTB_DEFAULT_THEME as ThemeOption) ?? 'dark';

/**
 * Default language
 * Options: 'en', 'es', 'fr', 'de', etc.
 */
export const DEFAULT_LANGUAGE = env.NTB_DEFAULT_LANGUAGE ?? 'en';

/**
 * Primary color (for default theme). Specified as a hex code.
 */
export const PRIMARY_COLOR = env.NTB_PRIMARY_COLOR ?? '';
