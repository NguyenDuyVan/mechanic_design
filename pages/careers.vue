<template>
  <div>
    <!-- Hero Section -->
    <section class="gradient-bg py-24 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop" 
          alt="Team Working" 
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold hero-text mb-6">
            {{ $t('careers.title') }}
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            {{ $t('careers.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('careers.whyJoin.title') }}</h2>
          <p class="section-subtitle">{{ $t('careers.whyJoin.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:trending-up" class="h-8 w-8 text-blue-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('careers.benefits.growth.title') }}</h3>
            <p class="text-gray-600">{{ $t('careers.benefits.growth.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:cash" class="h-8 w-8 text-green-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('careers.benefits.salary.title') }}</h3>
            <p class="text-gray-600">{{ $t('careers.benefits.salary.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:account-group" class="h-8 w-8 text-purple-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('careers.benefits.team.title') }}</h3>
            <p class="text-gray-600">{{ $t('careers.benefits.team.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:clock-outline" class="h-8 w-8 text-orange-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('careers.benefits.balance.title') }}</h3>
            <p class="text-gray-600">{{ $t('careers.benefits.balance.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:heart" class="h-8 w-8 text-red-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('careers.benefits.health.title') }}</h3>
            <p class="text-gray-600">{{ $t('careers.benefits.health.description') }}</p>
          </div>
          
          <div class="card p-8 text-center">
            <div class="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="mdi:school" class="h-8 w-8 text-indigo-600" />
            </div>
            <h3 class="text-xl font-semibold mb-4">{{ $t('careers.benefits.training.title') }}</h3>
            <p class="text-gray-600">{{ $t('careers.benefits.training.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Work Environment -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('careers.environment.title') }}</h2>
          <p class="section-subtitle">{{ $t('careers.environment.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <img 
            src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Team Collaboration" 
            class="rounded-xl shadow-lg w-full h-64 object-cover"
          >
          <img 
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Modern Workspace" 
            class="rounded-xl shadow-lg w-full h-64 object-cover"
          >
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img 
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Office Space" 
            class="rounded-lg shadow-lg w-full h-48 object-cover"
          >
          <img 
            src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Meeting Room" 
            class="rounded-lg shadow-lg w-full h-48 object-cover"
          >
          <img 
            src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
            alt="Workshop" 
            class="rounded-lg shadow-lg w-full h-48 object-cover"
          >
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('careers.positions.title') }}</h2>
          <p class="section-subtitle">{{ $t('careers.positions.subtitle') }}</p>
        </div>
        
        <div class="space-y-6">
          <!-- Senior Mechanical Engineer -->
          <div class="card p-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="mdi:account-hard-hat" class="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">{{ $t('careers.jobs.senior.title') }}</h3>
                    <p class="text-gray-600">{{ $t('careers.jobs.senior.department') }}</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">{{ $t('careers.jobs.senior.description') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{{ $t('careers.jobs.senior.skills.0') }}</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{{ $t('careers.jobs.senior.skills.1') }}</span>
                  <span class="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">{{ $t('careers.jobs.senior.skills.2') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-500">
                  <Icon name="mdi:map-marker" class="h-4 w-4 mr-1" />
                  <span class="mr-4">{{ $t('careers.jobs.senior.location') }}</span>
                  <Icon name="mdi:clock" class="h-4 w-4 mr-1" />
                  <span>{{ $t('careers.jobs.senior.type') }}</span>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <button class="btn-primary">{{ $t('careers.apply') }}</button>
              </div>
            </div>
          </div>

          <!-- CAD Designer -->
          <div class="card p-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="mdi:draw" class="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">{{ $t('careers.jobs.cad.title') }}</h3>
                    <p class="text-gray-600">{{ $t('careers.jobs.cad.department') }}</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">{{ $t('careers.jobs.cad.description') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{{ $t('careers.jobs.cad.skills.0') }}</span>
                  <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{{ $t('careers.jobs.cad.skills.1') }}</span>
                  <span class="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">{{ $t('careers.jobs.cad.skills.2') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-500">
                  <Icon name="mdi:map-marker" class="h-4 w-4 mr-1" />
                  <span class="mr-4">{{ $t('careers.jobs.cad.location') }}</span>
                  <Icon name="mdi:clock" class="h-4 w-4 mr-1" />
                  <span>{{ $t('careers.jobs.cad.type') }}</span>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <button class="btn-primary">{{ $t('careers.apply') }}</button>
              </div>
            </div>
          </div>

          <!-- Project Manager -->
          <div class="card p-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="mdi:account-tie" class="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">{{ $t('careers.jobs.pm.title') }}</h3>
                    <p class="text-gray-600">{{ $t('careers.jobs.pm.department') }}</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">{{ $t('careers.jobs.pm.description') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{{ $t('careers.jobs.pm.skills.0') }}</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{{ $t('careers.jobs.pm.skills.1') }}</span>
                  <span class="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">{{ $t('careers.jobs.pm.skills.2') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-500">
                  <Icon name="mdi:map-marker" class="h-4 w-4 mr-1" />
                  <span class="mr-4">{{ $t('careers.jobs.pm.location') }}</span>
                  <Icon name="mdi:clock" class="h-4 w-4 mr-1" />
                  <span>{{ $t('careers.jobs.pm.type') }}</span>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <button class="btn-primary">{{ $t('careers.apply') }}</button>
              </div>
            </div>
          </div>

          <!-- Junior Engineer -->
          <div class="card p-8">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between">
              <div class="flex-1">
                <div class="flex items-center mb-4">
                  <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                    <Icon name="mdi:school" class="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 class="text-xl font-semibold">{{ $t('careers.jobs.junior.title') }}</h3>
                    <p class="text-gray-600">{{ $t('careers.jobs.junior.department') }}</p>
                  </div>
                </div>
                <p class="text-gray-600 mb-4">{{ $t('careers.jobs.junior.description') }}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                  <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">{{ $t('careers.jobs.junior.skills.0') }}</span>
                  <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">{{ $t('careers.jobs.junior.skills.1') }}</span>
                  <span class="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">{{ $t('careers.jobs.junior.skills.2') }}</span>
                </div>
                <div class="flex items-center text-sm text-gray-500">
                  <Icon name="mdi:map-marker" class="h-4 w-4 mr-1" />
                  <span class="mr-4">{{ $t('careers.jobs.junior.location') }}</span>
                  <Icon name="mdi:clock" class="h-4 w-4 mr-1" />
                  <span>{{ $t('careers.jobs.junior.type') }}</span>
                </div>
              </div>
              <div class="mt-4 md:mt-0 md:ml-6">
                <button class="btn-primary">{{ $t('careers.apply') }}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('careers.process.title') }}</h2>
          <p class="section-subtitle">{{ $t('careers.process.subtitle') }}</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('careers.process.step1.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('careers.process.step1.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('careers.process.step2.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('careers.process.step2.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('careers.process.step3.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('careers.process.step3.description') }}</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 class="text-lg font-semibold mb-2">{{ $t('careers.process.step4.title') }}</h3>
            <p class="text-gray-600 text-sm">{{ $t('careers.process.step4.description') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-blue-600 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
          alt="Join Our Team" 
          class="w-full h-full object-cover opacity-20"
        >
      </div>
      <div class="container-max text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          {{ $t('careers.cta.title') }}
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          {{ $t('careers.cta.subtitle') }}
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-blue-600 hover:bg-gray-100">
          {{ $t('careers.cta.button') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Careers - Join MechDesign Team',
  meta: [
    { name: 'description', content: 'Join our team of mechanical design experts. Explore career opportunities at MechDesign and grow your engineering career with us.' }
  ]
})
</script>