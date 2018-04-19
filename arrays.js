
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(arr,elem)
{
  return [elem,...arr];
}

 
function destructivelyAddElementToBeginningOfArray(arr,elem)
{return arr.unshift(elem);}

function addElementToEndOfArray(array, element)
{return [...array,element];}

function destructivelyAddElementToEndOfArray(array, element)
{return array.push(element);}
 
function accessElementInArray(array, index)
{return array[index];}

function destructivelyRemoveElementFromBeginningOfArray(array)
{return array.shift();}
  
function removeElementFromBeginningOfArray(array)
{return array.slice(1);}

function destructivelyRemoveElementFromEndOfArray(array)
{return array.pop();}
 

  describe('destructivelyRemoveElementFromEndOfArray(array)', () => {
    it('returns the array with the last element removed', () => {
      expect(destructivelyRemoveElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('alters the original array', ()=>{
      const array = [1, 2, 3];
      destructivelyRemoveElementFromEndOfArray(array);
      expect(array).to.eql([1, 2]);
    })
  })
  
  describe('removeElementFromEndOfArray(array)', () => {
    it('removes the last element from the array', () => {
      expect(removeElementFromEndOfArray([1, 2, 3])).to.eql([1, 2])
    })
    
    it('does not alter the original array', () => {
      const array = [1, 2, 3];
      removeElementFromEndOfArray(array);
      expect(array).to.eql([1, 2, 3]);
    })
  })
})