<template>

<dialog id="add-note" class="dialog--transactional hide-icon text-start">
    <button class="dialog__close">Close</button>
    <span class="h3">Add note</span>
    <p>You are adding a note for the sale case: 22 Lynx Road, Tynemouth, Newcastle upon Tyne, NE1 5LS</p>
    <div class="mh-lg">
        
      <form action="#notes">
        
        <input type="hidden" name="alert" value="add-note" /> 
        
        <label>
          Note type
          <select>
            <option value="vendor" name="method">Vendor</option>
          </select>
        </label>

        <label>
          Add note
          <textarea></textarea>
        </label>

        <span class="label">Share note with</span>
        <fieldset>
          <label class="mb-0"><input type="checkbox" name="share[]" value="all" /> All</label>
          <label class="mb-0"><input type="checkbox" name="share[]" value="iamproperty" /> iamproperty internal</label>
          <label class="mb-0"><input type="checkbox" name="share[]" value="agent" /> Linked agent</label>
          <label class="mb-5"><input type="checkbox" name="share[]" value="solicitor" /> Solicitor (if assigned)</label>
        </fieldset>
          
        <div class="text-nowrap text-end">
          <button class="btn btn-secondary" formmethod="dialog">Cancel</button>
          <button class="btn btn-primary">Save note</button>
      
        </div>   
      </form>
    </div>
  </dialog>


</template>
