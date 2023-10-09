<template>
  <main>
    
    <DSHeader :image="headerImg" section="components">
      <h1>Address lookup (Beta)</h1>
    </DSHeader>

    <div class="container">
      <p class="lead">...</p>

    </div>

    <div class="container visualtest">


      <AddressLookup data-url="/addressess.json?search=">
                    
                    <div>
                      <label for="address-line-1">Address line one</label>
                      <input type="text" name="address-line-1" data-name="address_1" id="address-line-1" data-required />
                      <span class="invalid-feedback">This field is required</span>
                    </div>
                    <div>
                      <label for="address-line-2">Address line two</label>
                      <input type="text" name="address-line-2" data-name="address_2" id="address-line-2"/>
                    </div>
                    <div>
                      <label for="address-line-3">Address line three</label>
                      <input type="text" name="address-line-3" data-name="address_3" id="address-line-3"/>
                    </div>
                    <div>
                      <label for="city">City</label>
                      <input type="text" name="city" data-name="city" id="city" data-required />
                      <span class="invalid-feedback">This field is required</span>
                    </div>
                    <div>
                      <label for="county">County</label>
                      <select type="select" name="county" id="county" data-required>
                        <option value=""></option>
                        <option value="Tyne and Wear">Tyne and Wear</option>
                        <option value="Cleveland">Cleveland</option>
                      </select>
                      <span class="invalid-feedback">This field is required</span>
                    </div>
                    <div>
                      <label for="postcode">Postcode</label>
                      <input type="text" name="postcode" data-name="address_1" id="postcode" data-required  />
                      <span class="invalid-feedback">This field is required</span>
                    </div>
                    <div>
                      <label for="country">Country</label>
                      <select type="select" name="country" id="country" data-required>
                        <option value=""></option>
                        <option value="England">England</option>
                        <option value="Scotland">Scotland</option>
                        <option value="Wales">Wales</option>
                      </select>
                      <span class="invalid-feedback">This field is required</span>
                    </div>
                  </AddressLookup>
        

    </div>


    <div class="container">
      
      <h2>Implementation</h2>
      <Tabs>
        <details>
          <summary><h3>Web component</h3></summary>
          <WebReadme></WebReadme>
        </details>
        <details>
          <summary><h3>Vue component</h3></summary>
          <Readme></Readme>
        </details>
        <!--
        <details>
          <summary><h3>HTML</h3></summary>
          <pre><code class="javascript">{{`<div class="container"></div>`}}</code></pre>
        </details>
      -->
      </Tabs>

    </div>
    <div class="bg-light version-control">
      <div class="container">
        <table>
          <thead>
            <tr>
              <th>Version Control</th>
              <th>Date</th>
              <th>Design System Version</th>
              <th>Notable updates</th>
            </tr>
          </thead>
          <tbody class="text-body">
            <tr>
              <td>0.1</td>
              <td></td>
              <td>v4.1.0</td>
              <td></td>
            </tr>
          </tbody>
        </table>
        <a href="/pdfs/actionbar.pdf" download>Download latest designs</a>
      </div>
    </div>

  </main>
</template>

<style lang="scss" scoped>
@use "../../../assets/sass/func" as *;

</style>

<script>
import DSHeader from '../DSHeader.vue'
import headerImg from '../../img/cards-header.png'
import Tabs from '@/components/Tabs/Tabs.vue'
import Table from '@/components/Table/Table.vue'
import AddressLookup from '@/components/AddressLookup/AddressLookup.vue'


export default {
  components: {
    DSHeader,
    headerImg,
    Tabs,
    Table,
    AddressLookup
  },
  data () {
    return {
      headerImg: headerImg
    }
  },
  mounted() {
    this.$nextTick(function () {


    })
  }
}
</script>