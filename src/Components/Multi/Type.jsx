import React from 'react'

const Type = () => {
  return (
    <div>
        
<form class="max-w-sm ">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 ">Select an option</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  ">
    <option selected>Choose Mode</option>
    <option value="FR">FREE </option>
    <option value="PA">Paid</option>
   
  </select>
</form>

    </div>
  )
}

export default Type