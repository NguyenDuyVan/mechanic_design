<template>
  <div>
    <!-- Hero Section -->
    <section class="gradient-bg py-24 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop" 
          alt="Company Building" 
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold hero-text mb-6">
            {{ $t('about.title') }}
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            {{ $t('about.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">{{ $t('about.overview.title') }}</h2>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ $t('about.overview.description1') }}
            </p>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ $t('about.overview.description2') }}
            </p>
            <div class="grid grid-cols-2 gap-4">
              <div class="text-center p-4 bg-blue-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">2014</div>
                <div class="text-sm text-gray-600">{{ $t('about.overview.founded') }}</div>
              </div>
              <div class="text-center p-4 bg-blue-50 rounded-lg">
                <div class="text-2xl font-bold text-blue-600">150+</div>
                <div class="text-sm text-gray-600">{{ $t('about.overview.projects') }}</div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Engineering Team" 
              class="rounded-lg shadow-lg w-full h-48 object-cover"
            >
            <img 
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
              alt="Design Process" 
              class="rounded-lg shadow-lg w-full h-48 object-cover mt-8"
            >
          </div>
        </div>
      </div>
    </section>

    <!-- Mission, Vision, Values -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.values.title') }}</h2>
          <p class="section-subtitle">{{ $t('about.values.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:target" class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('about.mission.title') }}</h3>
            <p class="text-gray-600">{{ $t('about.mission.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:eye" class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('about.vision.title') }}</h3>
            <p class="text-gray-600">{{ $t('about.vision.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:diamond" class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('about.coreValues.title') }}</h3>
            <p class="text-gray-600">{{ $t('about.coreValues.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.leadership.title') }}</h2>
          <p class="section-subtitle">{{ $t('about.leadership.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-6 text-center">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="CEO" 
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-xl font-semibold mb-2">{{ $t('about.leadership.ceo.name') }}</h3>
            <p class="text-blue-600 text-sm mb-3">{{ $t('about.leadership.ceo.position') }}</p>
            <p class="text-gray-600 text-sm">{{ $t('about.leadership.ceo.description') }}</p>
          </div>
          
          <div class="card p-6 text-center">
            <img 
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="CTO" 
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-xl font-semibold mb-2">{{ $t('about.leadership.cto.name') }}</h3>
            <p class="text-blue-600 text-sm mb-3">{{ $t('about.leadership.cto.position') }}</p>
            <p class="text-gray-600 text-sm">{{ $t('about.leadership.cto.description') }}</p>
          </div>
          
          <div class="card p-6 text-center">
            <img 
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="Head of Design" 
              class="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-xl font-semibold mb-2">{{ $t('about.leadership.head.name') }}</h3>
            <p class="text-blue-600 text-sm mb-3">{{ $t('about.leadership.head.position') }}</p>
            <p class="text-gray-600 text-sm">{{ $t('about.leadership.head.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Office Gallery -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.office.title') }}</h2>
          <p class="section-subtitle">{{ $t('about.office.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Office Reception" 
            class="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          >
          <img 
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Design Studio" 
            class="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          >
          <img 
            src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Meeting Room" 
            class="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          >
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Workshop" 
            class="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          >
          <img 
            src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Testing Lab" 
            class="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          >
          <img 
            src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Break Area" 
            class="rounded-lg shadow-lg w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          >
        </div>
      </div>
    </section>

    <!-- Achievements -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.achievements.title') }}</h2>
          <p class="section-subtitle">{{ $t('about.achievements.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:trophy" class="h-10 w-10 text-yellow-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('about.achievements.award1.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('about.achievements.award1.description') }}</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:certificate" class="h-10 w-10 text-green-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('about.achievements.award2.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('about.achievements.award2.description') }}</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:star" class="h-10 w-10 text-blue-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('about.achievements.award3.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('about.achievements.award3.description') }}</p>
          </div>
          
          <div class="text-center">
            <div class="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="mdi:medal" class="h-10 w-10 text-purple-600" />
            </div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('about.achievements.award4.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('about.achievements.award4.description') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'About Us - MechDesign Company',
  meta: [
    { name: 'description', content: 'Learn about MechDesign - a leading mechanical design company with over 10 years of experience in engineering solutions.' }
  ]
})
</script>