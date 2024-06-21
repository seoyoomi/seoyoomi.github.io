document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    var modalButtons = document.querySelectorAll('.workspace div'); // 프로젝트 모달 버튼
    var itemButtons = document.querySelectorAll('.item-button'); // 아이템 모달 버튼
    var closeButtons = document.querySelectorAll('.close, .item-close'); // 모든 종류의 닫기 버튼

    // 프로젝트 모달 버튼 클릭 이벤트
    modalButtons.forEach(function(btn) {
        btn.onclick = function() {
            var modalId = btn.getAttribute('data-modal-target');
            var modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'block';
            }
        };
    });

    // 아이템 모달 버튼 클릭 이벤트
    itemButtons.forEach(function(btn) {
        btn.onclick = function() {
            var targetModalId = btn.getAttribute('data-modal-target');
            var targetModal = document.getElementById(targetModalId);
            if (targetModal) {
                targetModal.style.display = 'block';
            }
        };
    });

    // 모달 닫기 버튼 클릭 이벤트
    closeButtons.forEach(function(button) {
        button.onclick = function() {
            this.closest('.modal').style.display = 'none';
        };
    });

    // 모달 외부 클릭 시 모달 닫기 이벤트
    window.onclick = function(event) {
        modals.forEach(function(modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    };
});
