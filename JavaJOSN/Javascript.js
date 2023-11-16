document.getElementById('toggle-button').addEventListener('click', function() {
    var tableContainer = document.getElementById('table-container');
    if (tableContainer.style.display === 'none') {
      tableContainer.style.display = 'block';
      this.innerHTML = 'Hide Table';
    } else {
      tableContainer.style.display = 'none';
      this.innerHTML = 'Show Table';
    }
  });