<template>
  <div>
    <!-- Hero Section -->
    <section
      class="gradient-bg min-h-screen flex items-center relative overflow-hidden"
    >
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Mechanical Workshop"
          class="w-full h-full object-cover opacity-20"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"
        ></div>
      </div>

      <div class="container-max px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-6xl font-bold hero-text mb-6">
            {{ $t("home.hero.title") }}
          </h1>
          <p class="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto">
            {{ $t("home.hero.subtitle") }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink :to="localePath('/fields')" class="btn-primary">
              {{ $t("home.hero.cta") }}
            </NuxtLink>
            <NuxtLink
              :to="localePath('/contact')"
              class="btn-secondary border-white bg-white hover:bg-gray-100 text-blue-600"
            >
              {{ $t("home.hero.contact") }}
            </NuxtLink>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10"
      >
        <Icon name="mdi:chevron-down" class="h-8 w-8 text-white" />
      </div>
    </section>

    <!-- Stats Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">150+</div>
            <div class="text-gray-600">{{ $t("home.stats.projects") }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600">{{ $t("home.stats.clients") }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div class="text-gray-600">{{ $t("home.stats.experience") }}</div>
          </div>
          <div class="text-center">
            <div class="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <div class="text-gray-600">{{ $t("home.stats.engineers") }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t("home.about.title") }}</h2>
          <p class="section-subtitle">{{ $t("home.about.subtitle") }}</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Engineering Team"
              class="rounded-xl shadow-lg w-full h-96 object-cover"
            />
          </div>
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="mdi:target" class="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">
                  {{ $t("home.about.mission.title") }}
                </h3>
                <p class="text-gray-600">
                  {{ $t("home.about.mission.description") }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="mdi:eye" class="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">
                  {{ $t("home.about.vision.title") }}
                </h3>
                <p class="text-gray-600">
                  {{ $t("home.about.vision.description") }}
                </p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div
                class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <Icon name="mdi:diamond" class="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 class="text-xl font-semibold mb-2">
                  {{ $t("home.about.values.title") }}
                </h3>
                <p class="text-gray-600">
                  {{ $t("home.about.values.description") }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Technology Showcase -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="text-center">
            <img
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="CAD Design"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">
              {{ $t("home.technology.cad.title") }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ $t("home.technology.cad.description") }}
            </p>
          </div>

          <div class="text-center">
            <img
              src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Simulation"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">
              {{ $t("home.technology.simulation.title") }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ $t("home.technology.simulation.description") }}
            </p>
          </div>

          <div class="text-center">
            <img
              src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
              alt="Prototyping"
              class="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 class="text-lg font-semibold mb-2">
              {{ $t("home.technology.prototyping.title") }}
            </h3>
            <p class="text-gray-600 text-sm">
              {{ $t("home.technology.prototyping.description") }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t("home.projects.title") }}</h2>
          <p class="section-subtitle">{{ $t("home.projects.subtitle") }}</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card overflow-hidden">
            <img
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
              alt="Industrial Machinery"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">
                {{ $t("home.projects.automation.title") }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ $t("home.projects.automation.description") }}
              </p>
            </div>
          </div>

          <div class="card overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
              alt="Automotive Parts"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">
                {{ $t("home.projects.automotive.title") }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ $t("home.projects.automotive.description") }}
              </p>
            </div>
          </div>

          <div class="card overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop"
              alt="Medical Equipment"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-lg font-semibold mb-2">
                {{ $t("home.projects.medical.title") }}
              </h3>
              <p class="text-gray-600 text-sm">
                {{ $t("home.projects.medical.description") }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-blue-600 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop"
          alt="Engineering Background"
          class="w-full h-full object-cover opacity-20"
        />
      </div>
      <div class="container-max text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          {{ $t("home.cta.title") }}
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          {{ $t("home.cta.subtitle") }}
        </p>
        <NuxtLink
          :to="localePath('/contact')"
          class="btn-primary bg-white text-blue-600 hover:bg-gray-100"
        >
          {{ $t("home.hero.contact") }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const localePath = useLocalePath();
const { locale } = useI18n();

useHead({
  title:
    locale.value === "ja"
      ? "プロフェッショナル機械設計会社 - 革新的エンジニアリングソリューション"
      : "Mechanical Design Company - Professional Engineering Solutions",
  meta: [
    {
      name: "description",
      content:
        locale.value === "ja"
          ? "プロフェッショナル機械設計会社として、産業、自動車、航空宇宙、エネルギー分野向けの革新的なエンジニアリングソリューションを提供しています。"
          : "Professional mechanical design company providing innovative engineering solutions for industrial, automotive, aerospace, and energy sectors.",
    },
  ],
});
</script>
