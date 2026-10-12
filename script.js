
fetch("http://localhost:3000/courses")
  .then(res => res.json())
  .then(courses => {
    courses.forEach(course => {
      const div = document.createElement("div");
      div.className = "course";

      div.innerHTML = `
        <h3>${course.name}</h3>
        <p>Instructor: ${course.instructor}</p>
        <p>Duration: ${course.duration}</p>
        <button>Register</button>
      `;

      div.querySelector("button").onclick = function () {
        const list = document.getElementById("registered");

        if ([...list.children].some(
          li => li.dataset.id === String(course.id)
        )) return;

        const li = document.createElement("li");
        li.dataset.id = course.id;
        li.textContent = course.name;
        list.appendChild(li);

        this.textContent = "Registered";
        this.disabled = true;
      };

      document.getElementById("courses")
        .appendChild(div);
    });
  })
  .catch(() => {
    document.getElementById("courses").textContent =
      "Start JSON Server to load courses.";
  });