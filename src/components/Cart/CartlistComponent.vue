<template>
  <table class="table">
    <thead>
      <tr class="bg-secondary-100">
        <th></th>
        <th>商品名稱</th>
        <th class="d-none d-md-table-cell">單價</th>
        <th>數量</th>
        <th>小計</th>
        <th>
          <button
            class="btn btn-outline-orange-998-500 button-hover"
            type="button"
            @click="deleteAllCarts()"
          >
            X
          </button>
        </th>
      </tr>
    </thead>
    <tbody>
      <template v-if="carts">
        <tr class="align-middle" v-for="item in carts" :key="item.id">
          <td>
            <img
              :src="item.product.imageUrl['300w']"
              class="cart-image"
              :alt="item.product.title"
            />
          </td>
          <td>{{ item.product.title }}</td>
          <td class="d-none d-md-table-cell">NT$ {{ item.product.price }}</td>
          <td>
            <div class="border d-inline-block rounded-2">
              <button
                type="button"
                class="btn btn-sm"
                @click="updateCartItemQty(item, 'minus')"
              >
                <i class="fa-solid fa-minus"></i>
              </button>
              <span class="px-3">{{ item.qty }}</span>
              <button
                type="button"
                class="btn btn-sm"
                @click="updateCartItemQty(item, 'plus')"
              >
                <i class="fa-solid fa-plus"></i>
              </button>
            </div>
          </td>
          <td>NT$ {{ item.product.price * item.qty }}</td>
          <td>
            <button
              type="button"
              class="btn text-orange-998-500"
              @click="deleteCartItem(item)"
            >
              X
            </button>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot></tfoot>
  </table>
</template>
<script>
import { useCartStore } from '@/stores/cartStore';
import { mapActions, mapState } from 'pinia';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(useCartStore, ['carts']),
  },
  methods: {
    ...mapActions(useCartStore, [
      'getCarts',
      'updateCartItemQty',
      'deleteCartItem',
      'deleteAllCarts',
    ]),
  },
  mounted() {
    this.getCarts();
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/SCSS/all.scss';

.cart-image {
  height: 100px;
  width: 100px;
  object-fit: cover;
}
</style>
