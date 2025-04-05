import React, { useState, useRef } from 'react'; // Added useRef for file input

// --- Helper: Generate unique ID ---
const generateId = () => `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// --- Components (Photos added, others minimized) ---

// BasicInformation (Minimized)
const BasicInformation = ({ setActiveTab }) => { /* ... same as before ... */
    const currentTabIndex = tabs.findIndex(tab => tab.id === 'basic');
    const nextTabId = tabs[currentTabIndex + 1]?.id;
    return (
     <div className="flex-grow lg:w-2/3 space-y-5">
        <div> {/* Wrap content */}
        <h2 className="text-lg font-semibold text-gray-700">Destination Details</h2>
        <p className="text-sm text-gray-500 -mt-1 mb-3">Enter basic information about your travel experience</p>
        {/* ... Basic Info Inputs ... */}
         <div><label htmlFor="destinationName" className="block text-sm font-medium text-gray-700 mb-1">Destination Name</label><input type="text" id="destinationName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /></div>
        <div className="mt-4"><label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea id="description" rows={3} placeholder="Write a brief overview of your experience..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /></div>
        <div className="mt-4 flex flex-col sm:flex-row gap-4"><div className="flex-1"><label htmlFor="tripDuration" className="block text-sm font-medium text-gray-700 mb-1">Trip Duration</label><input type="text" id="tripDuration" placeholder="e.g. 7 days" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /></div><div className="flex-1"><label htmlFor="approxCost" className="block text-sm font-medium text-gray-700 mb-1">Approximate Cost (USD)</label><input type="number" id="approxCost" placeholder="e.g. 1500" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /></div></div>
      </div>
      <div className="flex justify-end pt-5">
          {nextTabId && <button onClick={() => setActiveTab(nextTabId)} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next: {tabs.find(t => t.id === nextTabId)?.label}</button>}
       </div>
    </div>
    )
};

// Attractions (Minimized)
const Attractions = ({ setActiveTab }) => { /* ... same as before ... */
    const [attractions, setAttractions] = useState([{ id: generateId(), name: '', description: '' }]);
    const handleInputChange = (id, field, value) => { setAttractions(prev => prev.map(attr => (attr.id === id ? { ...attr, [field]: value } : attr))); };
    const addAttraction = () => { setAttractions(prev => [...prev, { id: generateId(), name: '', description: '' }]); };
    const removeAttraction = (idToRemove) => { setAttractions(prev => prev.filter(attr => attr.id !== idToRemove)); };
    const currentTabIndex = tabs.findIndex(tab => tab.id === 'attractions');
    const prevTabId = tabs[currentTabIndex - 1]?.id;
    const nextTabId = tabs[currentTabIndex + 1]?.id;
     return (
     <div className="flex-grow lg:w-2/3 space-y-5">
        <div> {/* Wrap content */}
          <h2 className="text-lg font-semibold text-gray-700">Attractions & Places to Visit</h2>
          <p className="text-sm text-gray-500 -mt-1 mb-4">Share the must-visit places and attractions</p>
          <div className="space-y-6">
            {attractions.map((attr, index) => (
              <div key={attr.id} className="p-4 border border-gray-200 rounded-md relative">
                {index > 0 && <button onClick={() => removeAttraction(attr.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none" aria-label="Remove attraction"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>}
                <div><label htmlFor={`attractionName-${attr.id}`} className="block text-sm font-medium text-gray-700 mb-1">Attraction Name #{index + 1}</label><input type="text" id={`attractionName-${attr.id}`} value={attr.name} onChange={(e) => handleInputChange(attr.id, 'name', e.target.value)} placeholder="e.g. Eiffel Tower" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /></div>
                <div className="mt-3"><label htmlFor={`attractionDescription-${attr.id}`} className="block text-sm font-medium text-gray-700 mb-1">Description</label><textarea id={`attractionDescription-${attr.id}`} rows={3} value={attr.description} onChange={(e) => handleInputChange(attr.id, 'description', e.target.value)} placeholder="Describe this attraction and your experience..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /></div>
              </div> ))}
          </div>
          <div className="pt-4"> <button type="button" onClick={addAttraction} className="inline-flex items-center px-3 py-1.5 border border-dashed border-gray-400 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"><svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Add Another Attraction</button> </div>
        </div>
       <div className="flex justify-between pt-5">
           {prevTabId && <button onClick={() => setActiveTab(prevTabId)} className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>} {!prevTabId && <div></div>}
           {nextTabId && <button onClick={() => setActiveTab(nextTabId)} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next: {tabs.find(t => t.id === nextTabId)?.label}</button>}
        </div>
    </div>
   )
};

// Food (Minimized)
const Food = ({ setActiveTab }) => { /* ... same as before ... */
    const [diningItems, setDiningItems] = useState([{ id: generateId(), name: '', description: '' }]);
    const handleInputChange = (id, field, value) => { setDiningItems(prev => prev.map(item => (item.id === id ? { ...item, [field]: value } : item))); };
    const addDiningItem = () => { setDiningItems(prev => [...prev, { id: generateId(), name: '', description: '' }]); };
    const removeDiningItem = (idToRemove) => { setDiningItems(prev => prev.filter(item => item.id !== idToRemove)); };
    const currentTabIndex = tabs.findIndex(tab => tab.id === 'food');
    const prevTabId = tabs[currentTabIndex - 1]?.id;
    const nextTabId = tabs[currentTabIndex + 1]?.id;
     return (
      <div className="flex-grow lg:w-2/3 space-y-5">
        <div> {/* Wrap content */}
            <h2 className="text-lg font-semibold text-gray-700">Food & Dining Experiences</h2>
            <p className="text-sm text-gray-500 -mt-1 mb-4">Share your culinary experiences and recommendations</p>
            <div className="space-y-6">
                {diningItems.map((item, index) => ( <div key={item.id} className="p-4 border border-gray-200 rounded-md relative"> {index > 0 && <button onClick={() => removeDiningItem(item.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none" aria-label="Remove dining experience"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>} <div> <label htmlFor={`diningName-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">Restaurant / Dish Name #{index + 1}</label> <input type="text" id={`diningName-${item.id}`} value={item.name} onChange={(e) => handleInputChange(item.id, 'name', e.target.value)} placeholder="e.g. Cafe de Paris, Local Street Food" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /> </div> <div className="mt-3"> <label htmlFor={`diningDescription-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">Description</label> <textarea id={`diningDescription-${item.id}`} rows={3} value={item.description} onChange={(e) => handleInputChange(item.id, 'description', e.target.value)} placeholder="Describe this dining experience, special dishes, etc." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /> </div> </div> ))}
            </div>
            <div className="pt-4"> <button type="button" onClick={addDiningItem} className="inline-flex items-center px-3 py-1.5 border border-dashed border-gray-400 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"> <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Add Another Dining Experience </button> </div>
        </div>
         <div className="flex justify-between pt-5">
             {prevTabId && <button onClick={() => setActiveTab(prevTabId)} className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>} {!prevTabId && <div></div>}
             {nextTabId && <button onClick={() => setActiveTab(nextTabId)} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next: {tabs.find(t => t.id === nextTabId)?.label}</button>}
          </div>
      </div>
    )
};

// Tips (Minimized)
const Tips = ({ setActiveTab }) => { /* ... same as before ... */
    const [tips, setTips] = useState([{ id: generateId(), title: '', content: '' }]);
    const handleInputChange = (id, field, value) => { setTips(prev => prev.map(tip => (tip.id === id ? { ...tip, [field]: value } : tip))); };
    const addTip = () => { setTips(prev => [...prev, { id: generateId(), title: '', content: '' }]); };
    const removeTip = (idToRemove) => { setTips(prev => prev.filter(tip => tip.id !== idToRemove)); };
    const currentTabIndex = tabs.findIndex(tab => tab.id === 'tips');
    const prevTabId = tabs[currentTabIndex - 1]?.id;
    const nextTabId = tabs[currentTabIndex + 1]?.id;

    return (
      <div className="flex-grow lg:w-2/3 space-y-5">
        <div> {/* Wrap content */}
            <h2 className="text-lg font-semibold text-gray-700">Travel Tips</h2>
            <p className="text-sm text-gray-500 -mt-1 mb-4">Share your insights and recommendations for travelers</p>
            <div className="space-y-6">
                {tips.map((tip, index) => ( <div key={tip.id} className="p-4 border border-gray-200 rounded-md relative"> {index > 0 && <button onClick={() => removeTip(tip.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none" aria-label="Remove tip"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>} <div> <label htmlFor={`tipTitle-${tip.id}`} className="block text-sm font-medium text-gray-700 mb-1">Tip Title #{index + 1}</label> <input type="text" id={`tipTitle-${tip.id}`} value={tip.title} onChange={(e) => handleInputChange(tip.id, 'title', e.target.value)} placeholder="e.g. Best time to visit, Packing essentials" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /> </div> <div className="mt-3"> <label htmlFor={`tipContent-${tip.id}`} className="block text-sm font-medium text-gray-700 mb-1">Tip Content</label> <textarea id={`tipContent-${tip.id}`} rows={4} value={tip.content} onChange={(e) => handleInputChange(tip.id, 'content', e.target.value)} placeholder="Share your detailed tip here..." className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm" /> </div> </div> ))}
            </div>
            <div className="pt-4"> <button type="button" onClick={addTip} className="inline-flex items-center px-3 py-1.5 border border-dashed border-gray-400 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-blue-500"> <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>Add Another Travel Tip </button> </div>
        </div>
         <div className="flex justify-between pt-5">
             {prevTabId && <button onClick={() => setActiveTab(prevTabId)} className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>} {!prevTabId && <div></div>}
             {nextTabId && <button onClick={() => setActiveTab(nextTabId)} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Next: {tabs.find(t => t.id === nextTabId)?.label}</button>}
          </div>
      </div>
    )
};


// --- NEW: Photos Component ---
const Photos = ({ setActiveTab }) => {
  const fileInputRef = useRef(null); // Ref to access the hidden file input
  const [uploadedFiles, setUploadedFiles] = useState([]); // Basic state for file names (replace with actual file objects/previews later)

  // Function to trigger file input click
  const handleDropzoneClick = () => {
    fileInputRef.current?.click();
  };

  // Function to handle file selection (basic implementation)
  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    // In a real app: validate files, generate previews, upload etc.
    setUploadedFiles(prev => [...prev, ...files.map(f => f.name)]); // Just storing names for now
    console.log("Selected files:", files);
     // Reset file input value to allow selecting the same file again if needed
    event.target.value = '';
  };

  // Get neighboring tab IDs for navigation
  const currentTabIndex = tabs.findIndex(tab => tab.id === 'photos');
  const prevTabId = tabs[currentTabIndex - 1]?.id;

  const handlePreview = () => {
      // Add logic for what preview does - e.g., gather all data and show a modal/page
      alert("Preview Blog Action Triggered!");
      console.log("Previewing Blog...");
  }

  return (
    <div className="flex-grow lg:w-2/3 space-y-5">
        <div> {/* Wrap content */}
            <h2 className="text-lg font-semibold text-gray-700">Photos & Media</h2>
            <p className="text-sm text-gray-500 -mt-1 mb-4">Upload photos from your travel experience</p>

            {/* Dropzone Area */}
            <div
                onClick={handleDropzoneClick}
                className="mt-1 flex justify-center px-6 pt-10 pb-12 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-blue-400 transition-colors duration-200"
            >
                <div className="space-y-1 text-center">
                {/* Upload Icon */}
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="flex text-sm text-gray-600">
                    <span className="relative bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                    Click to upload photos
                    </span>
                    {/* Hidden file input */}
                    <input
                        ref={fileInputRef}
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        multiple // Allow multiple files
                        accept="image/png, image/jpeg" // Accept specific image types
                        className="sr-only" // Hide the default input
                        onChange={handleFileChange}
                    />
                </div>
                <p className="text-xs text-gray-500">(JPG, PNG files accepted)</p>
                </div>
            </div>

             {/* Display Uploaded File Names (Basic Example) */}
             {uploadedFiles.length > 0 && (
                <div className="mt-4 space-y-2">
                    <p className="text-sm font-medium text-gray-700">Uploaded:</p>
                    <ul className="list-disc list-inside text-sm text-gray-600">
                        {uploadedFiles.map((fileName, index) => (
                            <li key={`${fileName}-${index}`}>{fileName}</li>
                        ))}
                    </ul>
                </div>
            )}

             {/* Placeholder for image previews if needed */}
             {/* <div className="mt-4 grid grid-cols-3 gap-4"> ... previews here ... </div> */}

        </div> {/* End content wrapper */}

        {/* Navigation Buttons */}
         <div className="flex justify-between pt-5">
             {prevTabId && (
                  <button
                      onClick={() => setActiveTab(prevTabId)}
                      className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                  >
                      Back
                  </button>
             )}
             {!prevTabId && <div></div>} {/* Placeholder */}

            {/* Final Preview Button for this tab */}
             <button
                 type="button"
                 onClick={handlePreview} // Using the dedicated preview handler
                 className="inline-flex items-center justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
             >
                {/* Preview Icon */}
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                 Preview Blog
             </button>
          </div>
      </div>
  )
}


// --- Tab Configuration (Photos component updated) ---
const tabs = [
  { id: 'basic', label: 'Basic Information', component: BasicInformation },
  { id: 'attractions', label: 'Attractions', component: Attractions },
  { id: 'food', label: 'Food & Dining', component: Food },
  { id: 'tips', label: 'Travel Tips', component: Tips },
  { id: 'photos', label: 'Photos', component: Photos }, // Updated
];


// --- Reusable Tab Navigation Component ---
// (No changes needed)
function TabNavigation({ activeTab, setActiveTab }) { /* ... same as before ... */
  const activeTabClass = "whitespace-nowrap font-semibold text-sm text-gray-800 bg-white py-2 px-3 rounded-md cursor-pointer shadow-sm";
  const inactiveTabClass = "whitespace-nowrap py-2 px-3 border-transparent font-medium text-sm text-gray-600 hover:text-gray-700 cursor-pointer rounded-md hover:bg-gray-100";
   return ( <div className="border border-gray-200 bg-gray-100 w-fit mb-6 p-1 rounded-lg"> <nav className="flex space-x-1" aria-label="Tabs"> {tabs.map((tab) => ( <a key={tab.id} onClick={() => setActiveTab(tab.id)} className={activeTab === tab.id ? activeTabClass : inactiveTabClass} aria-current={activeTab === tab.id ? 'page' : undefined}> {tab.label} </a> ))} </nav> </div> );
}

// --- Main Form Component (Sidebar buttons updated) ---
function TravelBlogForm() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const travelerTypes = ['Solo Traveler', 'Solo Female Traveler', 'Budget Traveler', 'Family Trip', 'Couple / Honeymoon', 'Adventure Seeker', 'Cultural Explorer', 'Luxury Experience', ];
  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
  const changeTab = (newTabId) => { if (tabs.some(tab => tab.id === newTabId)) { setActiveTab(newTabId); } }

  const handleFinalPreview = () => {
      alert("Preview Final Blog Action!");
      // Logic to collect all data and show final preview
  }

  const handlePublish = () => {
       alert("Publish Blog Action!");
       // Logic to collect all data, validate, and submit/publish
  }

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-1">Create New Travel Blog</h1>
        <p className="text-sm text-gray-600 mb-6">Share your travel experience to help other travelers plan their trips</p>
        <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex flex-col lg:flex-row gap-8">
          {ActiveComponent ? <ActiveComponent setActiveTab={changeTab} /> : <p>Select a tab</p>}

          {/* Sidebar */}
          <div className="lg:w-1/3 space-y-6 flex-shrink-0">
             {/* Traveler Types Card */}
             <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-base font-semibold text-gray-700 mb-1">Traveler Types</h3>
              <p className="text-sm text-gray-500 mb-3">Select the types of travelers your blog is relevant for</p>
              <div className="space-y-2">
                {travelerTypes.map((type) => ( <div key={type} className="flex items-center"> <input id={`traveler-${type.replace(/\s+/g, '-')}`} name="travelerTypes" type="checkbox" value={type} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-offset-0 focus:ring-1" /> <label htmlFor={`traveler-${type.replace(/\s+/g, '-')}`} className="ml-2 block text-sm text-gray-700">{type}</label> </div> ))}
              </div>
            </div>

             {/* UPDATED Publish Card */}
             <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="text-base font-semibold text-gray-700 mb-1">Publish Your Blog</h3>
              <p className="text-sm text-gray-500 mb-4">Ready to share your experiences?</p> {/* Increased mb slightly */}
              {/* Stacked Buttons with Icons */}
              <div className="space-y-3">
                 <button
                    type="button"
                    onClick={handleFinalPreview}
                    // Updated styles: bg-teal-600, text-white, full width, flex center
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                 >
                    {/* Preview Icon */}
                    <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                    Preview Blog
                 </button>
                 <button
                   type="button"
                   onClick={handlePublish}
                   // Updated styles: bg-teal-600, text-white, full width, flex center
                   className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                 >
                    {/* Publish/Check Icon */}
                    <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Publish Blog
                 </button>
              </div>
            </div>
          </div> {/* End Sidebar */}
        </div> {/* End Main Content Flex */}
      </div> {/* End Main Card */}
    </div> // End Page Wrapper
  );
}

export default TravelBlogForm;