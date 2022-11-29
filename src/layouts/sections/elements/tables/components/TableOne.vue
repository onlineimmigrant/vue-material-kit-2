<script setup>
//Vue Material Kit 2 Pro components
import Table from "@/examples/tables/Table.vue";

// images
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

// table data
const tableData = {
  headers: ["Author", "Function", "Status", "Employed", "Action"],
  rows: [
    {
      image: team2,
      name: "John Michael",
      email: "john@creative-tim.com",
      position: ["Manager", "Organization"],
      status: true,
      date: "23/04/18",
      action: { label: "Edit", route: "/" },
    },
    {
      image: team3,
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      position: ["Programator", "Developer"],
      status: false,
      date: "11/01/19",
      action: { label: "Edit", route: "/" },
    },
    {
      image: team4,
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      position: ["Executive", "Projects"],
      status: true,
      date: "19/09/17",
      action: { label: "Edit", route: "/" },
    },
    {
      image: team3,
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      position: ["Programator", "Developer"],
      status: true,
      date: "24/12/08",
      action: { label: "Edit", route: "/" },
    },
    {
      image: team2,
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      position: ["Manager", "Executive"],
      status: false,
      date: "04/10/21",
      action: { label: "Edit", route: "/" },
    },
    {
      image: team4,
      name: "Miriam Eric",
      email: "miriam@creative-tim.com",
      position: ["Programator", "Developer"],
      status: false,
      date: "14/09/20",
      action: { label: "Edit", route: "/" },
    },
  ],
};
</script>
<template>
  <Table v-bind="tableData" />
</template>
