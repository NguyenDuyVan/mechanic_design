<template>
  <div>
    <!-- Hero Section -->
    <section class="gradient-bg py-24 relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop" 
          alt="Office Building" 
          class="w-full h-full object-cover opacity-30"
        >
        <div class="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
      </div>
      <div class="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold hero-text mb-6">
            {{ $t('contact.title') }}
          </h1>
          <p class="text-xl text-blue-100 max-w-3xl mx-auto">
            {{ $t('contact.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section-padding bg-white">
      <div class="container-max">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Thông tin liên hệ</h2>
            
            <!-- Office Image -->
            <div class="mb-8">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop" 
                alt="Our Office" 
                class="w-full h-48 object-cover rounded-lg shadow-md"
              >
            </div>
            
            <div class="space-y-6">
              <!-- Address -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mdi:map-marker" class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ $t('contact.info.address') }}</h3>
                  <p class="text-gray-600">
                    123 Đường Công nghệ, Quận 1<br>
                    TP. Hồ Chí Minh, Việt Nam
                  </p>
                </div>
              </div>

              <!-- Phone -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mdi:phone" class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ $t('contact.info.phone') }}</h3>
                  <p class="text-gray-600">+84 123 456 789</p>
                  <p class="text-gray-600">+84 987 654 321</p>
                </div>
              </div>

              <!-- Email -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mdi:email" class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ $t('contact.info.email') }}</h3>
                  <p class="text-gray-600">info@mechdesign.com</p>
                  <p class="text-gray-600">sales@mechdesign.com</p>
                </div>
              </div>

              <!-- Working Hours -->
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="mdi:clock" class="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 class="text-lg font-semibold text-gray-900 mb-1">{{ $t('contact.info.hours') }}</h3>
                  <p class="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:30</p>
                  <p class="text-gray-600">Thứ 7: 8:00 - 12:00</p>
                  <p class="text-gray-600">Chủ nhật: Nghỉ</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="mt-8">
              <h3 class="text-lg font-semibold text-gray-900 mb-4">Theo dõi chúng tôi</h3>
              <div class="flex space-x-4">
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="mdi:facebook" class="h-5 w-5" />
                </a>
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="mdi:linkedin" class="h-5 w-5" />
                </a>
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="mdi:twitter" class="h-5 w-5" />
                </a>
                <a href="#" class="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Icon name="mdi:youtube" class="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="card p-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.form.title') }}</h2>
            
            <form @submit.prevent="submitForm" class="space-y-6">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.name') }}
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nhập họ và tên"
                  >
                </div>
                
                <div>
                  <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.email') }}
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nhập email"
                  >
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label for="phone" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.phone') }}
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nhập số điện thoại"
                  >
                </div>
                
                <div>
                  <label for="company" class="block text-sm font-medium text-gray-700 mb-2">
                    {{ $t('contact.form.company') }}
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Nhập tên công ty"
                  >
                </div>
              </div>

              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                  {{ $t('contact.form.message') }}
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
                ></textarea>
              </div>

              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                <Icon v-if="isSubmitting" name="mdi:loading" class="h-5 w-5 mr-2 animate-spin" />
                {{ isSubmitting ? 'Đang gửi...' : $t('contact.form.send') }}
              </button>
            </form>

            <div v-if="submitMessage" class="mt-4 p-4 rounded-lg" :class="submitSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
              {{ submitMessage }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-max">
        <div class="text-center mb-16">
          <h2 class="section-title">Đội ngũ chuyên gia</h2>
          <p class="section-subtitle">Gặp gỡ những kỹ sư giàu kinh nghiệm của chúng tôi</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="card p-6 text-center">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="Team Member" 
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold mb-2">Nguyễn Văn A</h3>
            <p class="text-blue-600 text-sm mb-2">Trưởng phòng Thiết kế</p>
            <p class="text-gray-600 text-sm">15+ năm kinh nghiệm trong thiết kế cơ khí công nghiệp</p>
          </div>
          
          <div class="card p-6 text-center">
            <img 
              src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="Team Member" 
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold mb-2">Trần Thị B</h3>
            <p class="text-blue-600 text-sm mb-2">Kỹ sư CAD/CAM</p>
            <p class="text-gray-600 text-sm">Chuyên gia về mô phỏng và phân tích kết cấu</p>
          </div>
          
          <div class="card p-6 text-center">
            <img 
              src="https://images.pexels.com/photos/3862365/pexels-photo-3862365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
              alt="Team Member" 
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            >
            <h3 class="text-lg font-semibold mb-2">Lê Văn C</h3>
            <p class="text-blue-600 text-sm mb-2">Kỹ sư Tự động hóa</p>
            <p class="text-gray-600 text-sm">Chuyên về hệ thống điều khiển và robot công nghiệp</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="h-96 bg-gray-200 relative overflow-hidden">
      <img 
        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" 
        alt="Office Location" 
        class="w-full h-full object-cover opacity-50"
      >
      <div class="absolute inset-0 bg-black/30"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="text-center text-white">
          <Icon name="mdi:map" class="h-16 w-16 mx-auto mb-4" />
          <p class="text-xl font-semibold">Vị trí văn phòng</p>
          <p class="text-sm">123 Đường Công nghệ, Quận 1, TP.HCM</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref('')
const submitSuccess = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  submitMessage.value = ''
  
  try {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    }
    
    submitMessage.value = 'Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.'
    submitSuccess.value = true
  } catch (error) {
    submitMessage.value = 'Có lỗi xảy ra khi gửi form. Vui lòng thử lại.'
    submitSuccess.value = false
  } finally {
    isSubmitting.value = false
    
    // Clear message after 5 seconds
    setTimeout(() => {
      submitMessage.value = ''
    }, 5000)
  }
}

useHead({
  title: 'Contact Us - Mechanical Design Company',
  meta: [
    { name: 'description', content: 'Get in touch with our mechanical design experts. Contact us for consultation on your engineering projects and design requirements.' }
  ]
})
</script>