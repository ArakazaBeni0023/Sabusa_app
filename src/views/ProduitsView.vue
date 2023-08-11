<script>
import axios from "axios";
export default {
  data() {
    return {
      listIbidandazwa: [
      ],
      quantite: 0,
    }
  },
  mounted() {
    axios.get("http://127.0.0.1:8000/produit/").then((response) => {
      this.listIbidandazwa = response.data
    })
  },
  method: {

  }
}
</script>
<template>
  <div class="Produits">
    <h1>Ibidandazwa</h1>
    <main>
      <section>
        <article>
          <div class="search">
            <i class="bi bi-search"></i>
            <input type="search" placeholder='Rondera ikidandazwa'>
          </div>
          <div class="ibidandazwa">
            <div class="ikidandazwa" v-for="item in listIbidandazwa" :key="item">
              <div class="name">
                <h1>{{ item.nom }}</h1>
              </div>
              <div class="description">
                <p><b>{{ item.prix_unitaire }}</b> fbu</p>
                <div class="counter"><button class="bi bi-dash"></button><span>{{ quantite }}</span><button
                    class="bi bi-plus"></button></div>
                <button class="add">Ongerako</button>
              </div>
            </div>
          </div>
        </article>
        <aside>
          <h1>Ibiguzwe</h1>
          <table>
            <thead>
              <th>Ibidandazwa</th>
              <th>Urugero</th>
              <th>Igiciro</th>
            </thead>
            <tbody>
              <tr v-for="(item, index) in listIbidandazwa" :key="index">
                <td>{{ item.izinaRyikidandazwa }}</td>
                <td>{{ item.index }}</td>
                <td>{{ item.igiciro }}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </section>
    </main>
  </div>
</template>
<style scoped>
.Produits {
  padding-top: 2rem;
}

main {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-block: 2rem;
}

section {
  width: 80%;
  display: flex;
  gap: 1rem;
}

article {
  width: 70%;
}

/* search bar */
.search {
  width: 100%;
  background: #212c38;
  border-radius: 5px;
  display: flex;
  overflow: hidden;
  margin-bottom: 1rem;
}

i {
  padding: 1rem 1.5rem;
  cursor: pointer;
  transition: background .5s ease;
}

i:hover {
  background: #2c3948;
}

input {
  all: unset;
  width: 100%;
  text-align: start;
  padding: 0 .5rem;
}

/* ibidandazwa */
.ibidandazwa {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
}

.ikidandazwa {
  width: 23.55%;
  height: 100%;
  border-radius: 5px;
  background: #212c38;
}

.ikidandazwa .name {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ikidandazwa .description {
  padding-inline: .5rem;
  padding-block-end: .5rem;
  display: flex;
  flex-direction: column;
  gap: .5rem;
}

.ikidandazwa .description .add {
  all: unset;
  /* width: 100%; */
  background: #097fc4;
  color: #fff;
  border-radius: 5px;
  padding: .5rem 1rem;
  cursor: pointer;
}

.counter {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.counter button {
  all: unset;
  background: #2c3948;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}

/* facture */

aside {
  width: 30%;
  border: 1px solid #000;
  text-align: start;
}

table {
  width: 100%;
  padding-top: .5rem;
}

thead {
  background: #212c38;
  padding: .5rem 1rem;
}

tr,
thead {
  width: 100%;
  padding: .5rem 1rem;
}

table tbody tr:nth-child(even) {
  border: 1px solid #cfd6de;
}

table td {
  padding: .5rem 1rem;

}
</style>

