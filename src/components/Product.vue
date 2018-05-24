<template>
  <div id="wrapper">
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12 left">
            <div class="row no-padding">
              <div class="col-md-3 col-sm-12 logoTop">
                <div class="logo">
                  <a href="/" title="">
                    <img src="https://theme.hstatic.net/1000003969/1000323463/14/logo.png?v=6530">
                  </a>
                </div>
              </div>
              <div class="col-md-9 col-sm-12 no-padding searchBox-wrapper">
                <div class="searchBox col-xs-12 no-padding">
                  <form action="/action_page.php">
                    <div class="input-group">
                      <input type="text" class="form-control" placeholder="Search" name="search">
                      <div class="input-group-btn search-btn">
                        <button class="btn btn-default" type="submit"><i class="fa fa-search"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="row">
              <div class="col-md-5 col-sm-4 switchboardTop left">
                <div class="switchboard_wrapper">
                  <i class="fa fa-bell" aria-hidden="true"></i>
                  <span>Thông báo của tôi</span>
                </div>
              </div>
              <div class="col-md-3 col-sm-4 switchboardTop">
                <div class="usertop_wrapper">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span>Đăng nhập</span>
                </div>
              </div>
              <div class="col-md-4 col-sm-4 switchboardTop">
                <div class="carttop_wrapper">
                  <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                  <span>0 sản phẩm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <nav>
      <div class="top hidden-sm hidden-xs">
        <div id="top-menu" class="top-menu hidden-sm hidden-xs">
          <div class="menutopBar">
            <div class="container no-padding" style="position: relative">
              <div class="menuTop-wrapper">
                <b-nav fill tabs>
                  <b-nav-item>Category 1</b-nav-item>
                  <b-nav-item>Category 2</b-nav-item>
                  <b-nav-item>Category 3</b-nav-item>
                  <b-nav-item>Category 4</b-nav-item>
                  <b-nav-item>Category 5</b-nav-item>
                </b-nav>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row product-details">
            <div class="col-md-4 product-images">
              <div class="col-md-10 col-6 big-image no-padding">
                <img :src="productInfo.src" alt="">
              </div>
              <div class="col-md-2 col-1 small-images no-padding" :v-model="image" v-for="image in productInfo.images" :key="image"  v-on:click="copySrc(image)">
                <span class="thumbnail-images">
                  <img :src="image" alt="">
                </span>
              </div>
            </div>
            <div class="col-md-8 product-info">
              <div class="name-section text-left">
                <h2>{{productInfo.name}}</h2>
                <div class="row brand-code">
                  <div class="col-md-3">
                    <span>Thương hiệu: </span><a href="#">{{productInfo.brand}}</a>
                  </div>
                  <div class="col-md-4">
                    <span class="product-code lightgray-text">{{productInfo.code}}</span>
                  </div>
                </div>
              </div>
              <div class="price-contact row text-left">
                <div class="col-md-8 product-price">
                  <p><span class="price text-danger">{{productInfo.price}} ₫</span> <span class="vat lightgray-text">Đã có VAT</span> </p>
                  <p><span>Tiết kiệm: </span><span class="discount-percent text-danger">{{productInfo.discount}} </span><span class="lightgray-text">({{productInfo.marketPrice - productInfo.price}} ₫)</span></p>
                  <p><span class="lightgray-text">Giá thị trường: {{productInfo.marketPrice}} ₫</span></p>
                </div>
                <div class="col-md-8 product-features no-padding">
                  <ul class="product-features-list" v-for="feature in productInfo.features" :key="feature">
                    <li>{{feature}}</li>
                  </ul>
                </div>
                <div class="col-md-8 product-options">
                  <div class="selectedColor">
                    <span>Chọn màu: </span>{{colorBinding}}
                  </div>
                  <div class="display-inline row">
                    <ul class="col-lg-2 col-md-3 col-sm-3 col-3" v-for="(option, index) in productInfo.options" :key="option">
                      <li
                        :v-model="selectedColor"
                        :value="option.value"
                        :class="{active: index === activeItem}"
                        v-on:click="selectColor(option.value, option.label, index)">{{option.label}}</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-8 add-product row">
                  <div class="col-md-3">
                    <span>Số lượng:</span>
                  </div>
                  <div class="col-md-6">
                    <input v-on:click="decreaseAmount()" class="product-amount" type="button" name="" value="-">
                    <input type="text" class="totalAmount no-padding" v-model="totalAmount" name="">
                    <input v-on:click="increaseAmount()" class="product-amount" type="button" value="+">
                    <input v-on:click="addProduct()" class="add-cart-btn" type="button" value="Thêm vào giỏ hàng">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row product-information">
          <b-card no-body>
            <b-tabs card full-width>
              <b-tab no-body title="Thông số kĩ thuật" active>
                <b-card-img src="https://picsum.photos/600/200/?image=21" />
              </b-tab>
              <b-tab no-body title="Thông tin chi tiết">
                <b-card-img src="https://picsum.photos/600/200/?image=25" />
              </b-tab>
              <b-tab no-body title="Hỏi đáp">
                <b-card-img src="https://picsum.photos/600/200/?image=25" />
              </b-tab>
            </b-tabs>
          </b-card>
        </div>
      </div>
      <div class="container">
        <div class="row product-rating">
          <div class="average-rating col-md-4 col-sm-5 col-4">
            <h4>Đánh giá trung bình</h4>
            <h1 class="average-point text-danger">{{productInfo.ratings.averagePoint}}/5</h1>
            <div class="stars-outer">
              <div class="stars-inner" style="width: 80%"></div>
              <a class="attribution"><i class="fa fa-font-awesome"></i> fontawesome.io</a>
            </div>
          </div>
          <div class="col-md-8 col-sm-7 col-8 row rating-progress-wrapper no-padding">
            <div class="col-lg-1 col-md-1 col-sm-1 col-1 rating-star-wrapper no-padding">
              <span>5<i class="fa fa-star" style="padding-left: 1px"></i></span>
              <span>4<i class="fa fa-star" style="padding-left: 1px"></i></span>
              <span>3<i class="fa fa-star" style="padding-left: 1px"></i></span>
              <span>2<i class="fa fa-star" style="padding-left: 1px"></i></span>
              <span>1<i class="fa fa-star" style="padding-left: 1px"></i></span>
            </div>
            <div class="col-md-10 col-sm-9 col-10">
              <b-progress :value="80" class="w-75 progressing-bar"></b-progress>
              <b-progress :value="65" class="w-75 progressing-bar"></b-progress>
              <b-progress :value="35" class="w-75 progressing-bar"></b-progress>
              <b-progress :value="0" class="w-75 progressing-bar"></b-progress>
              <b-progress :value="0" class="w-75 progressing-bar"></b-progress>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="user-comment row" v-for="comment in productInfo.comments" :key="comment">
          <div class="col-md-3 col-sm-4 col-5 user-info">
            <p class="user-avatar-img">
              <img src="../assets/images/logo.png" alt="">
            </p>
            <p>
              {{comment.userName}}
            </p>
          </div>
          <div class="col-md-9 col-sm-8 col-7 row comment">
            <div class="stars-outer rating-in-comment">
              <div class="stars-inner" :style="'width:'+comment.rating"></div>
              <a class="attribution"><i class="fa fa-font-awesome"></i> fontawesome.io</a>
            </div>
            <div class="col-7 comment-title text-left font-bold">
              {{comment.comment.title}}
            </div>
            <div class="comment-content">
              <p>{{comment.comment.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Product',
  data () {
    return {
      stars: [5, 4, 3, 2, 1],
      starPercentage: null,
      starPercentageRounded: null,
      selectedColor: '',
      colorBinding: '',
      activeItem: -1,
      totalAmount: 0,
      productInfo: {
        ratings: {
          progress: [80, 60, 30, 0, 0],
          averagePoint: 4
        },
        src: [require('../assets/images/pepsi.png')],
        images: [require('../assets/images/pepsi.png'), require('../assets/images/logo.jpg'), require('../assets/images/logo.png')],
        includedVAT: true,
        name: 'Loa Bluetooth JBL Flip 3',
        brand: 'JBL',
        code: 'SKU:6601869851822',
        price: 1590000,
        discount: '27%',
        marketPrice: 2190000,
        features: ['Sử dụng pin: 3.7 V/3000 mAh', 'Thời gian sử dụng pin: > 10 giờ', 'Kết nối: Bluetooth 4.1', 'Tích hợp đèn Led', 'Tích hợp microphone'],
        options: [
          { label: 'Xanh', value: 'Green' },
          { label: 'Vàng', value: 'Green' },
          { label: 'Đỏ', value: 'Green' },
          { label: 'Cam', value: 'Green' }
        ],
        comments: [
          {
            userName: 'Tan Minh',
            rating: '80%',
            comment: {
              title: 'Sản phẩm tốt',
              content: 'Tai nghe bluetooth giá rẻ nên không chờ đợi gì nhiều. Bass yếu. Dây hơi dài.'
            }
          },
          {
            userName: 'Loc Tong',
            rating: '100%',
            comment: {
              title: 'Sản phẩm tốt',
              content: 'Tai nghe bluetooth giá rẻ nên không chờ đợi gì nhiều. Bass yếu. Dây hơi dài.'
            }
          },
          {
            userName: 'Tran Trung',
            rating: '60%',
            comment: {
              title: 'Sản phẩm tốt',
              content: 'Tai nghe bluetooth giá rẻ nên không chờ đợi gì nhiều. Bass yếu. Dây hơi dài.'
            }
          }
        ]
      }
    }
  },
  methods: {
    copySrc: function (img) {
      this.productInfo.src = img
    },

    selectColor: function (value, label, index) {
      this.colorBinding = label
      this.selectedColor = value
      this.activeItem = index
    },

    decreaseAmount: function () {
      this.totalAmount === 0 ? this.totalAmount = 0 : this.totalAmount -= 1
    },

    increaseAmount: function () {
      this.totalAmount === 10 ? this.totalAmount = 10 : this.totalAmount += 1
    }
  },
  computed: {

  }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/product.scss';
@import '../assets/styles/_main.scss';
.active {
  background: blue;
  color: #ffffff;
}
</style>
