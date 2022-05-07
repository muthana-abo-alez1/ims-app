import {
  DEPARTMENT_URL,
  ITEM_URL,
  CATEGORY_URL,
  USER_URL,
  ROOM_URL,
} from "../settings/settings.js";

export function deleteCategory(id) {
  if (confirm("Are you sure you want to delete this category?")) {
    $.ajax({
      url: `${CATEGORY_URL}/${id}`,
      method: "DELETE",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("authorization", "Bearer " + token);
      },
      success: function (data) {
        alert(data.message);
        location.reload();
      },
      error: function (data) {
        alert(data.responseJSON.message);
        console.error(data.responseJSON.message);
      },
    });
  }
}

export function editCategory(id) {
  $("#edit-form")[0].reset();
  $.ajax({
    url: `${CATEGORY_URL}/${id}`,
    method: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("authorization", "Bearer " + token);
    },
    success: function (data) {
      let { category } = data;
      console.log(category);
      $("#edit-form")[0].reset();
      $("#edit-form").find("#id").val(category.id);
      $("#edit-form")
        .find("#mainClassification")
        .val(category.mainClassification);
      $("#edit-form")
        .find("#subClassification")
        .val(category.subClassification);
      $("#editModal").modal("show");
    },
    error: function (data) {
      alert(data.responseJSON.message);
      console.error(data.responseJSON.message);
    },
  });
}

export function deleteItem(id) {
  if (confirm("Are you sure you want to delete this item?")) {
    $.ajax({
      url: `${ITEM_URL}/${id}`,
      method: "DELETE",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("authorization", "Bearer " + token);
      },
      success: function (data) {
        alert(data.message);
        location.reload();
      },
      error: function (data) {
        alert(data.responseJSON.message);
        console.error(data.responseJSON.message);
      },
    });
  }
}

export function editItem(id) {
  $("#edit-form")[0].reset();

  $.ajax({
    url: `${ITEM_URL}/${id}`,
    method: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("authorization", "Bearer " + token);
    },
    success: function (data) {
      let { item } = data;
      $("#edit-form")[0].reset();
      $("#edit-form").find("#id").val(item.id);
      $("#edit-form").find("#name").val(item.name);
      $("#edit-form").find("#categoryId").val(item.category);
      $("#editModal").modal("show");
    },
    error: function (data) {
      alert(data.responseJSON.message);
      console.error(data.responseJSON.message);
    },
  });
}

export function deleteUser(id) {
  if (confirm("Are you sure you want to delete this user?")) {
    $.ajax({
      url: `${USER_URL}/${id}`,
      method: "DELETE",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("authorization", "Bearer " + token);
      },
      success: function (data) {
        alert(data.message);
        location.reload();
      },
      error: function (data) {
        alert(data.responseJSON.message);
        console.error(data.responseJSON.message);
      },
    });
  }
}

export function deleteRoom(id) {
  if (confirm("Are you sure you want to delete this room?")) {
    $.ajax({
      url: `${ROOM_URL}/${id}`,
      method: "DELETE",
      beforeSend: function (xhr) {
        xhr.setRequestHeader("authorization", "Bearer " + token);
      },

      success: function (data) {
        alert(data.message);
        location.reload();
      },
      error: function (data) {
        alert(data.responseJSON.message);
        console.error(data.responseJSON.message);
      },
    });
  }
}

export function editRoom(id) {
  $("#edit-form")[0].reset();
  $.ajax({
    url: `${ROOM_URL}/${id}`,
    method: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("authorization", "Bearer " + token);
    },
    success: function (data) {
      let { room } = data;
      $("#edit-form")[0].reset();
      $("#edit-form").find("#id").val(room.id);
      $("#edit-form").find("#type").val(room.type);
      $("#edit-form").find("#user").val(room.user);
      $("#edit-form").find("#department").val(room.department);
      $("#editModal").modal("show");
      console.log(data);
    },
    error: function (data) {
      alert(data.responseJSON.message);
      console.error(data.responseJSON.message);
    },
  });
}

export function editUser(id) {
  $("#edit-form")[0].reset();
  console.log(id);
  $.ajax({
    url: `${USER_URL}/${id}`,
    method: "GET",
    dataType: "json",
    beforeSend: function (xhr) {
      xhr.setRequestHeader("authorization", "Bearer " + token);
    },
    success: function (data) {
      let { user } = data;
      console.log(user);
      $("#edit-form")[0].reset();
      $("#edit-form").find("#id").val(user.id);
      $("#edit-form").find("#userName").val(user.username);
      $("#edit-form").find("#email").val(user.email);
      $("#edit-form").find("#phone").val(user.phone);
      $("#edit-form")
        .find("#departmentId")
        .val(user.department?.id || "");
      $("#editModal").modal("show");
    },
    error: function (data) {
      alert(data.responseJSON.message);
      console.error(data.responseJSON.message);
    },
  });
}
