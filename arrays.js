
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
 
function removeElementFromEndOfArray(array)
{return array.slice(0,array.length-1);}
 