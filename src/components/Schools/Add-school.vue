<template>
    <div class="dashboard_form">
        <form class="md-layout" @submit.prevent="submitHandler">
        <md-card class="md-layout-item md-size-80 md-small-size-100">
            <md-card-header>
                <div class="md-title">Register School</div>
            </md-card-header>

            <md-card-content>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.adminName.$error}">
                            <label for="adminstration-name">Adminstration Name</label>
                            <md-input name="adminstration-name" id="adminstration-name" autocomplete="given-name" v-model="formdata.adminName" @blur="$v.formdata.adminName.$touch()" />
                            <span class="md-error" v-if="$v.formdata.adminName.$error">The adminstration name is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                    </div>
                </div>

                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.schoolName.$error}">
                            <label for="school-name">School Name</label>
                            <md-input name="school-name" id="school-name" autocomplete="given-name" v-model="formdata.schoolName" @blur="$v.formdata.schoolName.$touch()" />
                            <span class="md-error" v-if="$v.formdata.schoolName.$error">The school name is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.schoolName.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.contactNumber.$error}">
                            <label for="contact-number">Contact Number</label>
                            <md-input name="contact-number" id="contact-number" autocomplete="given-name" v-model="formdata.contactNumber" @blur="$v.formdata.contactNumber.$touch()" />
                            <span class="md-error" v-if="$v.formdata.contactNumber.$error">The contact number is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.contactNumber.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.emailId.$error}">
                            <label for="email-id">Email Id</label>
                            <md-input name="email-id" id="email-id" autocomplete="given-name" v-model="formdata.emailId" @blur="$v.formdata.emailId.$touch()" />
                            <span class="md-error" v-if="$v.formdata.emailId.$error">The email id is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.emailId.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.location.$error}">
                            <label for="country">Country</label>
                            <md-input name="country" id="country" autocomplete="given-name" v-model="formdata.location.country" @blur="$v.formdata.country.$touch()" />
                            <span class="md-error" v-if="$v.formdata.location.$error">The country name is required</span>
        <!--                        <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.location.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.location.$error}">
                            <label for="city">City</label>
                            <md-input name="city" id="city" autocomplete="given-name" v-model="formdata.location.city" @blur="$v.formdata.location.$touch()" />
                            <span class="md-error" v-if="$v.formdata.location.$error">The city name is required</span>
        <!--                        <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.location.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.location.$error}">
                            <label for="state">State</label>
                            <md-input name="state" id="state" autocomplete="given-name" v-model="formdata.location.state" @blur="$v.formdata.location.$touch()" />
                            <span class="md-error" v-if="$v.formdata.location.$error">The state name is required</span>
        <!--                        <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.location.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.location.$error}">
                            <label for="address">Address</label>
                            <md-input name="address" id="address" autocomplete="given-name" v-model="formdata.location.address" @blur="$v.formdata.location.$touch()" />
                            <span class="md-error" v-if="$v.formdata.location.$error">The address is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.location.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.location.$error}">
                            <label for="zip">Zip</label>
                            <md-input name="zip" id="zip" autocomplete="given-name" v-model="formdata.location.zip" @blur="$v.formdata.location.$touch()" />
                            <span class="md-error" v-if="$v.formdata.location.$error">The zip is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.location.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <div class="md-layout md-gutter">
                    <div class="md-layout-item md-small-size-100">
                        <md-field :class="{invalid: $v.formdata.title.$error}">
                            <label for="first-name">Address</label>
                            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="formdata.title" @blur="$v.formdata.title.$touch()" />
                            <span class="md-error" v-if="$v.formdata.title.$error">The first name is required</span>
                            <!--<span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>-->
                        </md-field>
                        <p class="error_label" v-if="$v.formdata.title.$error">
                            this input field is required
                        </p>
                    </div>
                </div>
                <md-button class="md-dense md-raised md-primary">Submit</md-button>
            </md-card-content>
        </md-card>
        </form>

        <md-dialog :md-active="dialog">
            <p>Your have no content are you sure you want to add</p>

            <md-dialog-actions>
                <md-button class="md-primary" @click="dialogOnCancel">OOPS, I want to add it.</md-button>
                <md-button class="md-primary" @click="dialogOnConfirm">Yes I'm sure.</md-button>
            </md-dialog-actions>
        </md-dialog>

        <div v-if="addPosts" class="post_succesfull">
            Your post was posted
        </div>
    </div>
</template>

<script>
    import { required, maxLength } from 'vuelidate/lib/validators'

    export default {
        name: 'Add-school',
        data(){
            return{
                dialog: false,
                formdata:{
                    adminName: '',
                    schoolName: '',
                    contactNumber: '',
                    emailId: '',
                    location: {
                        country: '',
                        city: '',
                        state: '',
                        address: '',
                        zip: ''
                    },
                }
            }
        },
        validations:{
            formdata: {
                title: {
                    required,
                },
                adminName: {
                    required,
                },
                schoolName: {
                    required,
                },
                contactNumber: {
                    required,
                },
                emailId: {
                    required,
                },
                location: {
                    required,
                },
                state: {
                  required,
                },
                desc:{
                    required,
                    maxLength: maxLength(10)
                }
            }
        },
        methods:{
            submitHandler(){
                if(!this.$v.$invalid){
                    if(this.formdata.content === ''){
                        this.dialog = true
                    }else{
                        this.addPost()
                    }
                } else{
                    alert("wrong")
                }
            },
            dialogOnCancel(){
                this.dialog = false
            },
            dialogOnConfirm(){
                this.dialog = false;
                this.addPost()
            },
            addPost(){
                console.log("add post");
                //this.$store.dispatch('admin/addPost', this.formdata)
            },
            clearPost(){
                this.$v.$reset();
                this.$refs.myFileInput.value = '';
                this.formdata = {
                    title: '',
                    desc: '',
                    content: '',
                    rating: ''
                }
            },
            processFile(event){
                //let file = event.target.files[0];
                //this.$store.dispatch('admin/imageUpload', file)
            }
        },
        /*
        computed:{
            addPosts(){
                let status = this.$store.getters['admin/addPostStatus'];
                if(status){
                    this.clearPost()
                    this.$store.commit('admin/clearImageUpload')
                }
                return status;
            },
            imageUpload(){
                let imageUrl = this.$store.getters['admin/imageUpload'];
                this.formdata.img = imageUrl;
                return imageUrl
            }
        },
        destroyed() {
            this.$store.commit('admin/clearImageUpload')
        }*/
    }
</script>

<style scoped>
    .input_field.invalid input,
    .input_field.invalid select {
        border: 1px solid red;
    }
    .error_label{
        color: red;
    }
    .md-layout{
        margin-left: 10%;
    }
</style>
