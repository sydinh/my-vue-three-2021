<template>
  <form @submit.prevent="handleSubmit">
    <label>Email</label>
    <input type="email" required v-model="email" />
    <label>Password</label>
    <input type="password" required v-model="password" />
    <label>Role:</label>
    <select v-model="role">
      <option value="user">User</option>
      <option value="admin">Admin</option>
    </select>
    <label>Skills:</label>
    <input type="text" v-model="temSkill" @keyup="addSkill" />
    <ul>
      <li v-for="skill in skills" :key="skill">
        {{ skill }}
        <span @click="removeSkill(skill)">X</span>
      </li>
    </ul>
    <div class="terms">
      <input type="checkbox" required v-model="terms" />
      <label>Accept terms and conditions</label>
    </div>
    <div class="submit">
      <button>Create an Account</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      role: "user",
      terms: false,
      temSkill: "",
      skills: [],
    };
  },
  methods: {
    addSkill(event) {
      if (event.key === "," && this.temSkill) {
        if (this.skills.includes(this.temSkill)) {
          return;
        }
        this.skills.push(this.temSkill);
        this.temSkill = "";
      }
    },
    removeSkill(skill) {
      this.skills.splice(this.skills.indexOf(skill), 1);
    },
    handleSubmit() {
      console.log("Submitted!");
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  text-align: left;
}
label {
  display: inline-block;
  margin: 20px 0 10px;
  text-transform: uppercase;
}
input,
select {
  display: block;
  width: 100%;
  padding: 10px;
  color: #555;
  border: none;
  border-bottom: 1px solid #ddd;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
button {
  margin: 20px 0 0;
  padding: 10px 20px;
  color: #fff;
  border: none;
  background: #3b5998;
  border-radius: 10px;
}
.submit {
  text-align: center;
}
</style>
