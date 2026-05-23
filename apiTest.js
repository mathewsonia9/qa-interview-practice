const fetch = require('node-fetch');
const { title } = require('node:process');

// GET Test
async function testGetPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();

  console.log("--- GET Test ---");
  if (response.status === 200) {
    console.log("Status check: PASS");
  } else {
    console.log("Status check: FAIL — got", response.status);
  }
  if (data.id === 1) {
    console.log("Id check: PASS");
  } else {
    console.log("Id check: FAIL — got", data.id);
  }
}

// POST Test
async function testCreatePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "mock interview",
      body: "practice test",
      userId: 1
    })
  });
  const data = await response.json();

  console.log("\n--- POST Test ---");
  if (response.status === 201) {
    console.log("Status check: PASS");
  } else {
    console.log("Status check: FAIL — got", response.status);
  }
  if (data.title === "mock interview") {
    console.log("Title check: PASS");
  } else {
    console.log("Title check: FAIL — got", data.title);
  }
}

// PUT Test
async function testUpdatePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      title: "updated title",
      body: "updated body",
      userId: 1
    })
  });
  const data = await response.json();

  console.log("\n--- PUT Test ---");
  if (response.status === 200) {
    console.log("Status check: PASS");
  } else {
    console.log("Status check: FAIL — got", response.status);
  }
  if (data.title === "updated title") {
    console.log("Title check: PASS");
  } else {
    console.log("Title check: FAIL — got", data.title);
  }
}

// PATCH Test
async function testPatchPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "patched title"
    })
  });
  const data = await response.json();

  console.log("\n--- PATCH Test ---");
  if (response.status === 200) {
    console.log("Status check: PASS");
  } else {
    console.log("Status check: FAIL — got", response.status);
  }
  if (data.title === "patched title") {
    console.log("Title check: PASS");
  } else {
    console.log("Title check: FAIL — got", data.title);
  }
}

// DELETE Test
async function testDeletePost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/999", {
    method: "DELETE"
  });

  console.log("\n--- DELETE Test ---");
  if (response.status === 200) {
    console.log("Status check: PASS");
  } else {
    console.log("Status check: FAIL — got", response.status);
  }
}

// SAMPLE POST Test
async function randomApi(){
    const response= await fetch("https://jsonplaceholder.typicode.com/posts/999",{
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "mock interview_test",
            body: "practice test_test",
            userId: 1

        })
    })

    const data= response.json();
     console.log("\n--- MY Test ---");
    if(response.status===201 && data.title==="mock interview_test"){
        console.log("**Testing**");
        console.log("Status-Check: PASS-got ",response.status);
    }
    else{
        console.log("Status-Check: FAIL-got ",response.status);
    }
}

// Run all tests
async function runAllTests() {
  await testGetPost();
  await testCreatePost();
  await testUpdatePost();
  await testPatchPost();
  await testDeletePost();
  await randomApi();

  console.log("\n✅ All tests completed!");
}
runAllTests();
