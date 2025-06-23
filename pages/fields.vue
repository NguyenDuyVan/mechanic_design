<template>
  <div>
    <!-- Hero Section -->
    <section class="gradient-bg py-24 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop" 
          alt="Industrial Manufacturing" 
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold hero-text mb-6">
            {{ $t('fields.title') }}
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            {{ $t('fields.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Fields Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Industrial Machinery -->
          <div class="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
              alt="Industrial Machinery" 
              class="w-full h-48 object-cover"
            >
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:factory" class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ $t('fields.mechanical.title') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('fields.mechanical.description') }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Thiết kế máy sản xuất
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Hệ thống băng tải
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Máy đóng gói tự động
                </li>
              </ul>
            </div>
          </div>

          <!-- Automation Systems -->
          <div class="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3862379/pexels-photo-3862379.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
              alt="Automation Systems" 
              class="w-full h-48 object-cover"
            >
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:robot-industrial" class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ $t('fields.automation.title') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('fields.automation.description') }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Hệ thống robot công nghiệp
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Dây chuyền tự động
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Hệ thống điều khiển PLC
                </li>
              </ul>
            </div>
          </div>

          <!-- Automotive -->
          <div class="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
              alt="Automotive Industry" 
              class="w-full h-48 object-cover"
            >
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:car" class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ $t('fields.automotive.title') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('fields.automotive.description') }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Linh kiện động cơ
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Hệ thống truyền động
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Khung gầm xe
                </li>
              </ul>
            </div>
          </div>

          <!-- Aerospace -->
          <div class="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
              alt="Aerospace Industry" 
              class="w-full h-48 object-cover"
            >
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:airplane" class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ $t('fields.aerospace.title') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('fields.aerospace.description') }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Cấu trúc máy bay
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Hệ thống đáp ứng
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Linh kiện động cơ phản lực
                </li>
              </ul>
            </div>
          </div>

          <!-- Energy -->
          <div class="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
              alt="Energy Systems" 
              class="w-full h-48 object-cover"
            >
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:lightning-bolt" class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ $t('fields.energy.title') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('fields.energy.description') }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Turbine gió
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Hệ thống pin mặt trời
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Máy phát điện
                </li>
              </ul>
            </div>
          </div>

          <!-- Medical -->
          <div class="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" 
              alt="Medical Equipment" 
              class="w-full h-48 object-cover"
            >
            <div class="p-8">
              <div class="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Icon name="mdi:medical-bag" class="h-8 w-8 text-blue-600" />
              </div>
              <h3 class="text-xl font-semibold mb-4">{{ $t('fields.medical.title') }}</h3>
              <p class="text-gray-600 mb-6">{{ $t('fields.medical.description') }}</p>
              <ul class="space-y-2 text-sm text-gray-500">
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Thiết bị chẩn đoán
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Dụng cụ phẫu thuật
                </li>
                <li class="flex items-center">
                  <Icon name="mdi:check" class="h-4 w-4 text-green-500 mr-2" />
                  Máy hỗ trợ điều trị
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">Quy trình làm việc</h2>
          <p class="section-subtitle">Chúng tôi áp dụng quy trình chuyên nghiệp để đảm bảo chất lượng dự án</p>
        </div>
        
        <!-- Process Images -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <img 
            src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Design Process" 
            class="rounded-xl shadow-lg w-full h-64 object-cover"
          >
          <img 
            src="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
            alt="Engineering Analysis" 
            class="rounded-xl shadow-lg w-full h-64 object-cover"
          >
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 class="text-lg font-semibold mb-2">Tư vấn & Phân tích</h3>
            <p class="text-gray-600 text-sm">Hiểu rõ yêu cầu và phân tích khả thi của dự án</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 class="text-lg font-semibold mb-2">Thiết kế Sơ bộ</h3>
            <p class="text-gray-600 text-sm">Tạo ra các concept design và đánh giá phương án</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 class="text-lg font-semibold mb-2">Thiết kế Chi tiết</h3>
            <p class="text-gray-600 text-sm">Hoàn thiện bản vẽ kỹ thuật và tài liệu</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
            <h3 class="text-lg font-semibold mb-2">Bàn giao & Hỗ trợ</h3>
            <p class="text-gray-600 text-sm">Chuyển giao dự án và hỗ trợ triển khai</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-blue-600 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
          alt="Workshop Tools" 
          class="w-full h-full object-cover opacity-20"
        >
      </div>
      <div class="container-max text-center relative z-10">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
          Cần tư vấn về dự án thiết kế?
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Đội ngũ chuyên gia của chúng tôi sẵn sàng hỗ trợ bạn
        </p>
        <NuxtLink to="/contact" class="btn-primary bg-white text-blue-600 hover:bg-gray-100">
          Liên hệ tư vấn
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Our Fields - Mechanical Design Company',
  meta: [
    { name: 'description', content: 'Explore our expertise in mechanical design across various industries including automotive, aerospace, energy, and medical sectors.' }
  ]
})
</script>