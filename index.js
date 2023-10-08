function handleCheckAllBox(checkBoxElement) {
    let checkAllLabel = document.getElementById('checkAllLabel');
    if (checkBoxElement.checked) {
        toggleCheckboxes(true);
        checkAllLabel.textContent= ' Uncheck All';
    } else {
        toggleCheckboxes(false);
        checkBoxElement.nextElementSibling.textContent = ' Check All';
    }
}

function handleOtherCheckbox(checkBoxElement) {
    if (!checkBoxElement.checked) {
        const checkAllBox = document.getElementById('checkAllBox');
        checkAllBox.checked = false;
        checkAllBox.nextElementSibling.textContent = ' Check All';
    }
}

function toggleCheckboxes(checkState) {
    const checkboxes = document.querySelectorAll('.otherCheckbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = checkState;
    });
}
