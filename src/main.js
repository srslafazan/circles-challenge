import '@/style.css'

const $app = document.getElementById('app')
const $frameCircle = document.getElementById('frame-circle')
const $innerCircleGrid = document.getElementById('inner-circle-grid')

function createInnerCircle(text) {
  const $innerCircle = document.createElement('div')
  $innerCircle.className = 'inner-circle'
  $innerCircle.innerText = text

  $innerCircle.addEventListener('click', function(e) {
    if (e.target.className.indexOf('inner-circle-expanded') === -1) {
      e.target.classList.add('inner-circle-expanded')
      document.querySelectorAll('.inner-circle-row').forEach(row => row.classList.add('row-expanded'))
    } else {
      e.target.className = 'inner-circle'
      document.querySelectorAll('.inner-circle-row').forEach(row => (row.classList = 'inner-circle-row'))
    }
  })

  return $innerCircle
}

function createInnerCircleRow(itemNumbers) {
  const $innerCircleRow = document.createElement('div')
  $innerCircleRow.className = 'inner-circle-row'
  itemNumbers.forEach(num => {
    $innerCircleRow.appendChild(createInnerCircle(num))
  })
  return $innerCircleRow
}

const nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const $topInnerCircleRow = createInnerCircleRow(nums)
const $bottomInnerCircleRow = createInnerCircleRow(nums.map(num => (num + 10)))

$innerCircleGrid.appendChild($topInnerCircleRow)
$innerCircleGrid.appendChild($bottomInnerCircleRow)
