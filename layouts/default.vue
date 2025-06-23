<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="container-max px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="flex items-center space-x-2">
              <Icon name="mdi:gear" class="h-8 w-8 text-blue-600" />
              <span class="text-xl font-bold text-gray-900">MechDesign</span>
            </NuxtLink>
          </div>

          <!-- Desktop Navigation -->
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <NuxtLink
                :to="localePath('/')"
                class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                active-class="text-blue-600"
              >
                {{ $t("nav.overview") }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/about')"
                class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                active-class="text-blue-600"
              >
                {{ $t("nav.about") }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/fields')"
                class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                active-class="text-blue-600"
              >
                {{ $t("nav.fields") }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/careers')"
                class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                active-class="text-blue-600"
              >
                {{ $t("nav.careers") }}
              </NuxtLink>
              <NuxtLink
                :to="localePath('/contact')"
                class="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                active-class="text-blue-600"
              >
                {{ $t("nav.contact") }}
              </NuxtLink>
            </div>
          </div>

          <!-- Language Switcher & Mobile Menu -->
          <div class="flex items-center space-x-4">
            <!-- Language Switcher -->
            <div class="relative">
              <button
                @click="() => (languageDropdownOpen = !languageDropdownOpen)"
                class="inline-flex justify-center items-center space-x-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors border border-gray-300 rounded-md bg-white cursor-pointer"
                type="button"
              >
                <Icon name="mdi:translate" class="h-4 w-4" />
                <span>{{ locale === "ja" ? "日本語" : "Tiếng Việt" }}</span>
                <Icon
                  name="mdi:chevron-down"
                  class="h-4 w-4"
                  :class="{ 'rotate-180': languageDropdownOpen }"
                />
              </button>

              <div
                v-show="languageDropdownOpen"
                class="absolute right-0 mt-2 w-40 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[60] border border-gray-200"
                @click.stop
              >
                <div class="py-1">
                  <button
                    @click="changeLanguage('vi')"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    :class="{
                      'bg-blue-50 text-blue-600 font-medium': locale === 'vi',
                    }"
                  >
                    Tiếng Việt
                  </button>
                  <button
                    @click="changeLanguage('ja')"
                    class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    :class="{
                      'bg-blue-50 text-blue-600 font-medium': locale === 'ja',
                    }"
                  >
                    日本語
                  </button>
                </div>
              </div>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden">
              <button
                @click="mobileMenuOpen = !mobileMenuOpen"
                class="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              >
                <Icon
                  :name="mobileMenuOpen ? 'mdi:close' : 'mdi:menu'"
                  class="h-6 w-6"
                />
              </button>
            </div>
          </div>
        </div>

        <!-- Mobile Navigation -->
        <div v-show="mobileMenuOpen" class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <NuxtLink
              :to="localePath('/')"
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ $t("nav.overview") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/about')"
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ $t("nav.about") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/fields')"
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ $t("nav.fields") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/careers')"
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ $t("nav.careers") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact')"
              class="text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium"
              @click="mobileMenuOpen = false"
            >
              {{ $t("nav.contact") }}
            </NuxtLink>

            <!-- Mobile Language Switcher -->
            <div class="px-3 py-2">
              <div class="text-sm font-medium text-gray-500 mb-2">
                {{ $t("nav.language") }}
              </div>
              <div class="space-y-1">
                <button
                  v-for="localeOption in locales"
                  :key="localeOption.code"
                  @click="
                    changeLanguage(localeOption.code);
                    mobileMenuOpen = false;
                  "
                  class="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                  :class="{
                    'bg-blue-50 text-blue-600 font-medium':
                      localeOption.code === locale,
                  }"
                >
                  {{ localeOption.name }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main>
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white">
      <div class="container-max px-4 sm:px-6 lg:px-8 py-12">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Company Info -->
          <div class="md:col-span-2">
            <div class="flex items-center space-x-2 mb-4">
              <Icon name="mdi:gear" class="h-8 w-8 text-blue-400" />
              <span class="text-xl font-bold">MechDesign</span>
            </div>
            <p class="text-gray-300 mb-4">
              {{ $t("footer.company") }}
            </p>
            <div class="flex space-x-4">
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="mdi:facebook" class="h-5 w-5" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="mdi:linkedin" class="h-5 w-5" />
              </a>
              <a
                href="#"
                class="text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="mdi:twitter" class="h-5 w-5" />
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4"
            >
              {{ $t("footer.links.about") }}
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink
                  :to="localePath('/')"
                  class="text-gray-300 hover:text-white transition-colors"
                  >{{ $t("nav.overview") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/about')"
                  class="text-gray-300 hover:text-white transition-colors"
                  >{{ $t("nav.about") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/fields')"
                  class="text-gray-300 hover:text-white transition-colors"
                  >{{ $t("nav.fields") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/careers')"
                  class="text-gray-300 hover:text-white transition-colors"
                  >{{ $t("nav.careers") }}</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  :to="localePath('/contact')"
                  class="text-gray-300 hover:text-white transition-colors"
                  >{{ $t("nav.contact") }}</NuxtLink
                >
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3
              class="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4"
            >
              {{ $t("nav.contact") }}
            </h3>
            <div class="space-y-2 text-gray-300">
              <p class="flex items-center">
                <Icon name="mdi:map-marker" class="h-4 w-4 mr-2" />
                123 Tech Street, District 1
              </p>
              <p class="flex items-center">
                <Icon name="mdi:phone" class="h-4 w-4 mr-2" />
                +84 123 456 789
              </p>
              <p class="flex items-center">
                <Icon name="mdi:email" class="h-4 w-4 mr-2" />
                info@mechdesign.com
              </p>
            </div>
          </div>
        </div>

        <div class="mt-8 pt-8 border-t border-gray-800 text-center">
          <p class="text-gray-400">
            &copy; {{ new Date().getFullYear() }} MechDesign.
            {{ $t("footer.rights") }}
          </p>
        </div>
      </div>
    </footer>

    <!-- Click outside to close dropdown -->
    <div
      v-if="languageDropdownOpen"
      @click="languageDropdownOpen = false"
      class="fixed inset-0 z-[50]"
    ></div>
  </div>
</template>

<script setup>
const { locale, locales } = useI18n();
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const mobileMenuOpen = ref(false);
const languageDropdownOpen = ref(false);

const changeLanguage = async (newLocale) => {
  try {
    languageDropdownOpen.value = false;

    // Use Nuxt i18n's built-in switchLocalePath function
    const targetPath = switchLocalePath(newLocale);

    if (targetPath) {
      await navigateTo(targetPath);
    } else {
      // Fallback: navigate to home page with new locale
      const fallbackPath = newLocale === "vi" ? "/" : `/${newLocale}/`;
      await navigateTo(fallbackPath);
    }
  } catch (error) {
    console.error("Navigation error:", error);
    // Final fallback: reload page with new locale
    const fallbackUrl = newLocale === "vi" ? "/" : `/${newLocale}/`;
    window.location.href = fallbackUrl;
  }
};
</script>
