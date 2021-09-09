var eventBus = new Vue()

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
  <div class="product">

    <div class="product-image">
      <img v-bind:src="image" >
    </div>

    <div class="product-info">
      <h1> {{ title }} </h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :style="{ color: color }">Out of Stock</p>
      <p>Shipping: {{ shipping }}</p>

      <ul>
        <li v-for="detail in details"> {{ detail }} </li>
      </ul>

      <div v-for="(variant, index) in variants"
           :key="variant.variantId"
           class="color-box"
           :style="{ backgroundColor: variant.variantColor }"
           @mouseover="uptadeProduct(index)">

      </div>

      <button v-on:click="addToCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Add to Cart</button>
      <button v-on:click="removeFromCart" :disabled="!inStock" :class="{ disabledButton: !inStock }">Remove from Cart</button>

    </div>

    <product-tabs :reviews="reviews"> </product-tabs>

  </div>
  `,
  data() {
    return {
      brand: 'Soccer',
      color: 'red',
      product: 'Balls',
      selectedVariant: 0,
      details: ["80% leather", "20% plastic", "KIPSTA"],

      variants: [
          {
            variantId: 2234,
            variantColor: "red",
            variantImage: './img/img-ball-red.png',
            variantQuantity: 10
          },
          {
            variantId: 2235,
            variantColor: "blue",
            variantImage: './img/img-ball-white.png',
            variantQuantity: 0,
          }
        ],
        reviews: []
      }
    },
  methods: {
    addToCart() {
      this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
    },
    uptadeProduct(index) {
      this.selectedVariant = index
    },
    removeFromCart() {
      this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product
    },
    image() {
      return this.variants[this.selectedVariant].variantImage
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity
    },
    shipping() {
      if (this.premium && this.variants[this.selectedVariant].variantQuantity == 0) {
        return "Free"
      }
      return 2.99
    }
  },
  mounted() {
    eventBus.$on('review-submitted', productReview => {
      this.reviews.push(productReview)
    })
  }
})

Vue.component('product-review',  {
  template: `
    <form class="review-form" @submit.prevent="onSubmit">

      <p v-if="errors.length">
        <b>Please correct the following error(s):</b>
        <ul>
          <li v-for="error in errors">{{ error }}</li>
        </ul>
      </p>

      <p>
        <label for="name">Name:</label>
        <input id="name" v-model="name">
      </p>

      <p>
        <label for="review">Review:</label>
        <textarea id="review" v-model="review"></textarea>
      </p>

      <p>
        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating" >
          <option>5</option>
          <option>4</option>
          <option>3</option>
          <option>2</option>
          <option>1</option>
        </select>
      </p>

      <p>Would you recommend this product?</p>
        <label id="recommend">
          Yes
          <input id="recommend" name="recommend" type="radio" value="Yes" v-model="recommend"/>
        </label>
        <label id="recommend">
          No
          <input id="recommend" name="recommend" type="radio" value="No" v-model="recommend"/>
        </label>

      <p>
        <input type="submit" value="Submit">
      </p>

    </form>
  `,
  data() {
    return {
      name: null,
      review: null,
      rating: null,
      recommend: null,
      errors: []
    }
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.name && this.review && this.rating && this.recommend) {
        let productReview = {
          name: this.name,
          review: this.review,
          rating: this.rating,
          recommend: this.recommend
        }
        eventBus.$emit('review-submitted', productReview)
        this.name = null
        this.review = null
        this.rating = null
        this.recommend = null
      }
      else {
        if(!this.name) this.errors.push("Name required.")
        if(!this.review) this.errors.push("Review required.")
        if(!this.rating) this.errors.push("Rating required.")
        if(!this.recommend) this.errors.push("Recommendation required.")
      }
    }
  }
})

Vue.component('product-tabs', {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  template: `
    <div>
      <span class="tab" :class="{ activeTab: selectedTab === tab}"
          v-for="(tab, index) in tabs" :key="index" @click="selectedTab = tab"> {{ tab }} </span>

          <product-review v-show="selectedTab === 'Make a Review'"></product-review>

          <div v-show="selectedTab === 'Reviews'" class=reviewText>
            <p v-if="!reviews.length">There are no reviews yet.</p>
            <ul v-else>
              <li v-for="(review, index) in reviews" :key="index">
              <p>{{ review.name }}</p>
              <p>Rating: {{ review.rating }}</p>
              <p>{{ review.review }}</p>
              <p>Recommend: {{ review.recommend }}</p>
              </li>
            </ul>
           </div>

    </div>
  `,
  data() {
    return {
      tabs: ['Reviews', 'Make a Review'],
      selectedTab: 'Reviews'
    }
  }
})

var app = new Vue({
  el: '#app',
  data: {
    premium: true,
    cart: []
  },
  methods: {
    uptadeCart(id) {
      this.cart.push(id)
    },
    removeItem(id) {
      for (var i = this.cart.length - 1; i >= 0; i--) {
          if (this.cart[i] == id) {
            this.cart.splice(i, 1);
          }
      }
    }
  }
})
