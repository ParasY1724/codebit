import React, { useState, useRef, useEffect } from 'react'; // Added useEffect
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

// --- Helper: Generate unique ID ---
const generateId = () => `item-${Date.now()}-${Math.random().toString(16).slice(2)}`;

// --- Blog Data State Structure ---
const initialBlogData = {
    basicInfo: { destinationName: '', description: '', tripDuration: '', approxCost: '' },
    attractions: [{ id: generateId(), name: '', description: '' }],
    diningItems: [{ id: generateId(), name: '', description: '' }],
    tips: [{ id: generateId(), title: '', content: '' }],
    photos: [], // Will store File objects or simple names/previews
    selectedTravelerTypes: [],
};

// --- Child Components (Refactored to accept props) ---

const BasicInformation = ({ setActiveTab, basicInfo, setBasicInfo }) => {
    const currentTabIndex = tabs.findIndex(tab => tab.id === 'basic');
    const nextTabId = tabs[currentTabIndex + 1]?.id;

    // --- Handler to update specific field in basicInfo state ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBasicInfo(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="flex-grow lg:w-2/3 space-y-5">
            <div>
                <h2 className="text-lg font-semibold text-gray-700">Destination Details</h2>
                <p className="text-sm text-gray-500 -mt-1 mb-3">Enter basic information about your travel experience</p>
                {/* Destination Name */}
                <div>
                    <label htmlFor="destinationName" className="block text-sm font-medium text-gray-700 mb-1">Destination Name</label>
                    <input
                        type="text"
                        id="destinationName"
                        name="destinationName" // Added name attribute
                        value={basicInfo.destinationName} // Use prop value
                        onChange={handleChange} // Use handler
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" // Teal focus
                    />
                </div>
                {/* Description */}
                <div className="mt-4">
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                        id="description"
                        name="description" // Added name attribute
                        rows={3}
                        placeholder="Write a brief overview of your experience..."
                        value={basicInfo.description} // Use prop value
                        onChange={handleChange} // Use handler
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" // Teal focus
                    />
                </div>
                {/* Trip Duration & Cost */}
                <div className="mt-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                        <label htmlFor="tripDuration" className="block text-sm font-medium text-gray-700 mb-1">Trip Duration</label>
                        <input
                            type="text"
                            id="tripDuration"
                            name="tripDuration" // Added name attribute
                            placeholder="e.g. 7 days"
                            value={basicInfo.tripDuration} // Use prop value
                            onChange={handleChange} // Use handler
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" // Teal focus
                        />
                    </div>
                    <div className="flex-1">
                        <label htmlFor="approxCost" className="block text-sm font-medium text-gray-700 mb-1">Approximate Cost (USD)</label>
                        <input
                            type="number"
                            id="approxCost"
                            name="approxCost" // Added name attribute
                            placeholder="e.g. 1500"
                            value={basicInfo.approxCost} // Use prop value
                            onChange={handleChange} // Use handler
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" // Teal focus
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-end pt-5">
                {nextTabId && <button onClick={() => setActiveTab(nextTabId)} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Next: {tabs.find(t => t.id === nextTabId)?.label}</button>}
            </div>
        </div>
    )
};

// --- REUSABLE Component for list-based sections (Attractions, Food, Tips) ---
// Props: setActiveTab, items (the array), setItems (update function), title, subtitle, labels, placeholders
const ListSection = ({ setActiveTab, items, setItems, config }) => {
    const { tabId, title, subtitle, itemTitleLabel, itemContentLabel, itemTitlePlaceholder, itemContentPlaceholder, addLabel } = config;

    const handleInputChange = (id, field, value) => {
        setItems(prev =>
            prev.map(item => (item.id === id ? { ...item, [field]: value } : item))
        );
    };

    const addItem = () => {
        // Determine fields based on config (title/name, content/description)
        const newItem = { id: generateId() };
        if (itemTitleLabel) newItem[itemTitleLabel === 'Tip Title' ? 'title' : 'name'] = '';
        if (itemContentLabel) newItem[itemContentLabel === 'Tip Content' ? 'content' : 'description'] = '';
        setItems(prev => [...prev, newItem]);
    };

    const removeItem = (idToRemove) => {
        setItems(prev => prev.filter(item => item.id !== idToRemove));
    };

    const currentTabIndex = tabs.findIndex(tab => tab.id === tabId);
    const prevTabId = tabs[currentTabIndex - 1]?.id;
    const nextTabId = tabs[currentTabIndex + 1]?.id;

    return (
        <div className="flex-grow lg:w-2/3 space-y-5">
            <div>
                <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
                <p className="text-sm text-gray-500 -mt-1 mb-4">{subtitle}</p>
                <div className="space-y-6">
                    {items.map((item, index) => (
                        <div key={item.id} className="p-4 border border-gray-200 rounded-md relative">
                            {index > 0 && <button onClick={() => removeItem(item.id)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500 focus:outline-none" aria-label="Remove item"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg></button>}
                            {/* Title/Name Field */}
                            {itemTitleLabel && (
                                <div>
                                    <label htmlFor={`${tabId}-title-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">{itemTitleLabel} #{index + 1}</label>
                                    <input type="text" id={`${tabId}-title-${item.id}`} value={item.title ?? item.name ?? ''} onChange={(e) => handleInputChange(item.id, (itemTitleLabel === 'Tip Title' ? 'title' : 'name'), e.target.value)} placeholder={itemTitlePlaceholder} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                                </div>
                            )}
                            {/* Content/Description Field */}
                            {itemContentLabel && (
                                <div className="mt-3">
                                    <label htmlFor={`${tabId}-content-${item.id}`} className="block text-sm font-medium text-gray-700 mb-1">{itemContentLabel}</label>
                                    <textarea id={`${tabId}-content-${item.id}`} rows={itemContentLabel === 'Tip Content' ? 4 : 3} value={item.content ?? item.description ?? ''} onChange={(e) => handleInputChange(item.id, (itemContentLabel === 'Tip Content' ? 'content' : 'description'), e.target.value)} placeholder={itemContentPlaceholder} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:text-sm" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className="pt-4">
                    <button type="button" onClick={addItem} className="inline-flex items-center px-3 py-1.5 border border-dashed border-gray-400 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-teal-500">
                        <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>{addLabel}
                    </button>
                </div>
            </div>
            <div className="flex justify-between pt-5">
                {prevTabId && <button onClick={() => setActiveTab(prevTabId)} className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>} {!prevTabId && <div></div>}
                {nextTabId && <button onClick={() => setActiveTab(nextTabId)} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">Next: {tabs.find(t => t.id === nextTabId)?.label}</button>}
            </div>
        </div>
    );
};


// Photos component refactored
const Photos = ({ setActiveTab, photos, setPhotos }) => {
    const fileInputRef = useRef(null);
    const handleDropzoneClick = () => { fileInputRef.current?.click(); };

    const handleFileChange = (event) => {
        const files = Array.from(event.target.files);
        // Store File objects directly (or create previews if needed)
        setPhotos(prev => [...prev, ...files]);
        event.target.value = ''; // Reset input
    };

     const removePhoto = (indexToRemove) => {
        setPhotos(prev => prev.filter((_, index) => index !== indexToRemove));
    }

    const currentTabIndex = tabs.findIndex(tab => tab.id === 'photos');
    const prevTabId = tabs[currentTabIndex - 1]?.id;

    const handlePreview = () => {
        toast.info("Click 'Preview Blog' in the sidebar to see the full preview.");
    }

    return (
        <div className="flex-grow lg:w-2/3 space-y-5">
            <div>
                <h2 className="text-lg font-semibold text-gray-700">Photos & Media</h2>
                <p className="text-sm text-gray-500 -mt-1 mb-4">Upload photos from your travel experience</p>
                {/* Dropzone Area */}
                <div onClick={handleDropzoneClick} className="mt-1 flex justify-center px-6 pt-10 pb-12 border-2 border-gray-300 border-dashed rounded-md cursor-pointer hover:border-teal-400 transition-colors duration-200">
                    <div className="space-y-1 text-center">
                        <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"><path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <div className="flex text-sm text-gray-600"> <span className="relative bg-white rounded-md font-medium text-teal-600 hover:text-teal-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-teal-500"> Click to upload photos </span></div>
                        <input ref={fileInputRef} id="file-upload" name="file-upload" type="file" multiple accept="image/png, image/jpeg" className="sr-only" onChange={handleFileChange} />
                        <p className="text-xs text-gray-500">(JPG, PNG files accepted)</p>
                    </div>
                </div>
                 {/* Display Uploaded Files with Remove Button */}
                {photos.length > 0 && (
                    <div className="mt-4 space-y-2">
                        <p className="text-sm font-medium text-gray-700">Uploaded Photos ({photos.length}):</p>
                        <ul className="list-none space-y-1">
                            {photos.map((file, index) => (
                                <li key={`${file.name}-${index}`} className="text-sm text-gray-600 flex justify-between items-center bg-gray-100 px-2 py-1 rounded">
                                    <span>{file.name} ({(file.size / 1024).toFixed(1)} KB)</span>
                                     <button onClick={() => removePhoto(index)} className="text-red-500 hover:text-red-700 ml-2 text-xs" aria-label="Remove photo">Remove</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
            {/* Navigation Buttons */}
            <div className="flex justify-between pt-5">
                {prevTabId && <button onClick={() => setActiveTab(prevTabId)} className="inline-flex justify-center py-2 px-6 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Back</button>} {!prevTabId && <div></div>}
                <button type="button" onClick={handlePreview} className="inline-flex items-center justify-center py-2 px-6 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>Preview Blog</button>
            </div>
        </div>
    )
}

// --- Tab Configuration (linking components) ---
// NOTE: The component property now directly references the component function
const tabs = [
    { id: 'basic', label: 'Basic Information', component: BasicInformation },
    { id: 'attractions', label: 'Attractions', component: ListSection, config: { tabId: 'attractions', title: 'Attractions & Places to Visit', subtitle: 'Share the must-visit places and attractions', itemTitleLabel: 'Attraction Name', itemContentLabel: 'Description', itemTitlePlaceholder: 'e.g. Eiffel Tower', itemContentPlaceholder: 'Describe this attraction...', addLabel: 'Add Another Attraction' } },
    { id: 'food', label: 'Food & Dining', component: ListSection, config: { tabId: 'food', title: 'Food & Dining Experiences', subtitle: 'Share your culinary experiences and recommendations', itemTitleLabel: 'Restaurant / Dish Name', itemContentLabel: 'Description', itemTitlePlaceholder: 'e.g. Cafe de Paris', itemContentPlaceholder: 'Describe this dining experience...', addLabel: 'Add Another Dining Experience' } },
    { id: 'tips', label: 'Travel Tips', component: ListSection, config: { tabId: 'tips', title: 'Travel Tips', subtitle: 'Share your insights and recommendations', itemTitleLabel: 'Tip Title', itemContentLabel: 'Tip Content', itemTitlePlaceholder: 'e.g. Packing light', itemContentPlaceholder: 'Share your detailed tip...', addLabel: 'Add Another Travel Tip' } },
    { id: 'photos', label: 'Photos', component: Photos },
];

// --- Reusable Tab Navigation Component ---
function TabNavigation({ activeTab, setActiveTab }) {
    const activeTabClass = "whitespace-nowrap font-semibold text-sm text-gray-800 bg-white py-2 px-3 rounded-md cursor-pointer shadow-sm";
    const inactiveTabClass = "whitespace-nowrap py-2 px-3 border-transparent font-medium text-sm text-gray-600 hover:text-gray-700 cursor-pointer rounded-md hover:bg-gray-100";
    return ( <div className="border border-gray-200 bg-gray-100 w-fit mb-6 p-1 rounded-lg"> <nav className="flex space-x-1" aria-label="Tabs"> {tabs.map((tab) => ( <a key={tab.id} href="#" onClick={(e) => {e.preventDefault(); setActiveTab(tab.id)}} className={activeTab === tab.id ? activeTabClass : inactiveTabClass} aria-current={activeTab === tab.id ? 'page' : undefined}> {tab.label} </a> ))} </nav> </div> );
}

// --- NEW: Blog Preview Modal Component ---
const BlogPreviewModal = ({ isOpen, onClose, blogData }) => {
    if (!isOpen) return null;

    // Helper to render lists safely
    const renderList = (items, titleField, contentField) => {
        if (!items || items.length === 0) return <p className="text-sm text-gray-500 italic">None added.</p>;
        return (
            <ul className="list-disc list-inside space-y-2">
                {items.map(item => (
                    <li key={item.id} className="text-sm">
                        <span className="font-semibold">{item[titleField] || item.name || 'Untitled'}</span>: {item[contentField] || item.description || 'No description.'}
                    </li>
                ))}
            </ul>
        );
    };

     // Helper to render photos
    const renderPhotos = (photos) => {
        if (!photos || photos.length === 0) return <p className="text-sm text-gray-500 italic">No photos uploaded.</p>;
        // Basic display of file names
        return (
             <ul className="list-disc list-inside space-y-1">
                {photos.map((photo, index) => (
                    <li key={index} className="text-sm">{photo.name}</li> // Assuming 'photo' is a File object
                 ))}
            </ul>
        )
        // For actual image previews, you'd need URL.createObjectURL or store base64/uploaded URLs
    }

    return (
        // Modal backdrop
        <div className="fixed inset-0 backdrop-blur-sm z-40 flex justify-center items-start p-4 pt-10 md:pt-20 overflow-y-auto">
            {/* Modal content */}
            <div className="bg-white rounded-lg shadow-xl w-full max-w-3xl max-h-[85vh] overflow-y-auto relative transform transition-all duration-300 scale-95 opacity-0 animate-modal-scale-in">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
                    aria-label="Close preview"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                </button>

                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">Blog Preview</h2>

                    {/* Basic Info Section */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-semibold text-teal-700">Destination Details</h3>
                        <p><span className="font-medium text-gray-600">Destination:</span> {blogData.basicInfo.destinationName || <span className='italic text-gray-400'>Not set</span>}</p>
                        <p><span className="font-medium text-gray-600">Description:</span> {blogData.basicInfo.description || <span className='italic text-gray-400'>Not set</span>}</p>
                        <p><span className="font-medium text-gray-600">Duration:</span> {blogData.basicInfo.tripDuration || <span className='italic text-gray-400'>Not set</span>}</p>
                        <p><span className="font-medium text-gray-600">Approx Cost (USD):</span> {blogData.basicInfo.approxCost || <span className='italic text-gray-400'>Not set</span>}</p>
                    </div>
                    <hr/>

                    {/* Attractions Section */}
                    <div className="space-y-2">
                         <h3 className="text-lg font-semibold text-teal-700">Attractions</h3>
                         {renderList(blogData.attractions.filter(a => a.name || a.description), 'name', 'description')}
                    </div>
                    <hr/>

                     {/* Food & Dining Section */}
                     <div className="space-y-2">
                         <h3 className="text-lg font-semibold text-teal-700">Food & Dining</h3>
                          {renderList(blogData.diningItems.filter(d => d.name || d.description), 'name', 'description')}
                    </div>
                    <hr/>

                     {/* Travel Tips Section */}
                     <div className="space-y-2">
                         <h3 className="text-lg font-semibold text-teal-700">Travel Tips</h3>
                         {renderList(blogData.tips.filter(t => t.title || t.content), 'title', 'content')}
                    </div>
                     <hr/>

                    {/* Photos Section */}
                    <div className="space-y-2">
                         <h3 className="text-lg font-semibold text-teal-700">Photos</h3>
                          {renderPhotos(blogData.photos)}
                    </div>
                    <hr/>

                    {/* Traveler Types Section */}
                     <div className="space-y-2">
                         <h3 className="text-lg font-semibold text-teal-700">Relevant Traveler Types</h3>
                         {blogData.selectedTravelerTypes.length > 0 ? (
                             <ul className="list-disc list-inside space-y-1">
                                 {blogData.selectedTravelerTypes.map(type => <li key={type} className="text-sm">{type}</li>)}
                             </ul>
                         ) : <p className="text-sm text-gray-500 italic">None selected.</p>}
                    </div>

                     {/* Modal Footer (Optional) */}
                     <div className="pt-4 text-right">
                         <button onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 text-sm">Close Preview</button>
                     </div>
                </div>
            </div>
        </div>
    );
};

// Add CSS for the modal animation (add this to your main CSS file or a <style> tag)
/*
@keyframes modal-scale-in {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
.animate-modal-scale-in {
  animation: modal-scale-in 0.2s ease-out forwards;
}
*/


// --- Main Form Component (State Lifted) ---
function TravelBlogForm() {
    const [activeTab, setActiveTab] = useState(tabs[0].id);
    // --- Lifted State ---
    const [blogData, setBlogData] = useState(initialBlogData);
    // States for child components derived from blogData
    const [basicInfo, setBasicInfo] = useState(blogData.basicInfo);
    const [attractions, setAttractions] = useState(blogData.attractions);
    const [diningItems, setDiningItems] = useState(blogData.diningItems);
    const [tipsData, setTipsData] = useState(blogData.tips); // Renamed to avoid conflict
    const [photos, setPhotos] = useState(blogData.photos);
    const [selectedTravelerTypes, setSelectedTravelerTypes] = useState(blogData.selectedTravelerTypes);

    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false); // Modal state
    // --- End Lifted State ---

    const navigate = useNavigate();
    const availableTravelerTypes = ['Solo Traveler', 'Solo Female Traveler', 'Budget Traveler', 'Family Trip', 'Couple / Honeymoon', 'Adventure Seeker', 'Cultural Explorer', 'Luxury Experience'];

    // --- Update parent blogData when child state changes ---
    // (Using useEffect for simplicity, could also update directly in setters)
    useEffect(() => {
        setBlogData(prev => ({ ...prev, basicInfo }));
    }, [basicInfo]);
    useEffect(() => {
        setBlogData(prev => ({ ...prev, attractions }));
    }, [attractions]);
    useEffect(() => {
        setBlogData(prev => ({ ...prev, diningItems }));
    }, [diningItems]);
    useEffect(() => {
        setBlogData(prev => ({ ...prev, tips: tipsData }));
    }, [tipsData]);
     useEffect(() => {
        setBlogData(prev => ({ ...prev, photos }));
    }, [photos]);
    useEffect(() => {
        setBlogData(prev => ({ ...prev, selectedTravelerTypes }));
    }, [selectedTravelerTypes]);
    // --- End Update Logic ---

    // Map components and pass props correctly
    const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component;
    const activeConfig = tabs.find(tab => tab.id === activeTab)?.config;

    let componentProps = { setActiveTab: setActiveTab }; // Base props

    // Add specific state props based on the active tab
    if (activeTab === 'basic') {
        componentProps = { ...componentProps, basicInfo, setBasicInfo };
    } else if (activeTab === 'attractions') {
        componentProps = { ...componentProps, items: attractions, setItems: setAttractions, config: activeConfig };
    } else if (activeTab === 'food') {
         componentProps = { ...componentProps, items: diningItems, setItems: setDiningItems, config: activeConfig };
    } else if (activeTab === 'tips') {
        componentProps = { ...componentProps, items: tipsData, setItems: setTipsData, config: activeConfig };
    } else if (activeTab === 'photos') {
         componentProps = { ...componentProps, photos, setPhotos };
    }
    // --- End Prop Mapping ---

     // Handler for Traveler Type checkboxes
     const handleTravelerTypeChange = (event) => {
        const { value, checked } = event.target;
        setSelectedTravelerTypes(prev =>
            checked ? [...prev, value] : prev.filter(type => type !== value)
        );
    };


    const handleFinalPreview = () => {
        console.log("Collected Blog Data for Preview:", blogData); // Log collected data
        setIsPreviewModalOpen(true); // Open the modal
    };

    const handlePublish = () => {
        // You might want to add validation here before publishing
        console.log("Publishing Blog Data:", blogData);
        toast.success("Blog Published Successfully!");
        navigate('/'); // Redirect after publish
    };

    return (
        <div className="bg-gray-50 min-h-screen p-8">
            <div className="max-w-6xl mx-auto bg-white p-6 md:p-8 rounded-lg border border-gray-200">
                <h1 className="text-2xl font-semibold text-gray-800 mb-1">Create New Travel Blog</h1>
                <p className="text-sm text-gray-600 mb-6">Share your travel experience to help other travelers plan their trips</p>
                <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Render the active component with dynamically assigned props */}
                    {ActiveComponent ? React.createElement(ActiveComponent, componentProps) : <p>Select a tab</p>}

                    {/* Sidebar */}
                    <div className="lg:w-1/3 space-y-6 flex-shrink-0">
                        {/* Traveler Types Card */}
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-base font-semibold text-gray-700 mb-1">Traveler Types</h3>
                            <p className="text-sm text-gray-500 mb-3">Select the types of travelers your blog is relevant for</p>
                            <div className="space-y-2">
                                {availableTravelerTypes.map((type) => (
                                    <div key={type} className="flex items-center">
                                        <input
                                            id={`traveler-${type.replace(/\s+/g, '-')}`}
                                            name="travelerTypes"
                                            type="checkbox"
                                            value={type}
                                            // Control checked state from lifted state
                                            checked={selectedTravelerTypes.includes(type)}
                                            onChange={handleTravelerTypeChange} // Use the handler
                                            // Updated checkbox color
                                            className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500 focus:ring-offset-0 focus:ring-1"
                                        />
                                        <label htmlFor={`traveler-${type.replace(/\s+/g, '-')}`} className="ml-2 block text-sm text-gray-700">{type}</label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Publish Card */}
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="text-base font-semibold text-gray-700 mb-1">Publish Your Blog</h3>
                            <p className="text-sm text-gray-500 mb-4">Ready to share your experiences?</p>
                            <div className="space-y-3">
                                <button type="button" onClick={handleFinalPreview} className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                    <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>Preview Blog
                                </button>
                                <button type="button" onClick={handlePublish} className="w-full inline-flex items-center justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                                    <svg className="w-5 h-5 mr-2 -ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>Publish Blog
                                </button>
                            </div>
                        </div>
                    </div> {/* End Sidebar */}
                </div> {/* End Main Content Flex */}
            </div> {/* End Main Card */}

            {/* Render the Preview Modal */}
             <BlogPreviewModal
                isOpen={isPreviewModalOpen}
                onClose={() => setIsPreviewModalOpen(false)}
                blogData={blogData} // Pass the collected data
            />

        </div> // End Page Wrapper
    );
}

export default TravelBlogForm;