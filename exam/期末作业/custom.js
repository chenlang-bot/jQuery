$(document).ready(function () {
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        // 这里可以添加登录验证逻辑，暂时直接跳转
        window.location.href = 'user.html';
    });

    $('#registerForm').submit(function (e) {
        e.preventDefault();
        // 简单的注册验证示例
        var newUsername = $('#newUsername').val();
        var newPassword = $('#newPassword').val();
        var confirmPassword = $('#confirmPassword').val();
        if (newPassword === confirmPassword) {
            // 注册成功，暂时直接跳转
            window.location.href = 'login.html';
        } else {
            alert('两次输入的密码不一致');
        }
    });
});