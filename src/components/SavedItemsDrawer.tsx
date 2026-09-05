import { X, Heart, Eye, Calendar, Trash2 } from 'lucide-react';
import { CatalogItem } from '../data/catalogImages';

interface SavedItemsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedItems: CatalogItem[];
  onRemoveItem: (id: string) => void;
  onSelectPiece: (item: CatalogItem) => void;
  onBookViewing: (item: CatalogItem) => void;
}

export function SavedItemsDrawer({
  isOpen,
  onClose,
  savedItems,
  onRemoveItem,
  onSelectPiece,
  onBookViewing,
}: SavedItemsDrawerProps) {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Saved Jewellery Pieces"
      className="fixed inset-0 z-50 bg-[#241C18]/60 backdrop-blur-xs flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-[#FBF8F1] border-l border-[#C9A45C]/40 shadow-2xl flex flex-col animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-5 bg-white border-b border-[#E9DDCC] flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
            </div>
            <div>
              <h3 className="font-['Cormorant_Garamond',serif] text-xl font-bold text-[#493B35]">
                Saved Creations
              </h3>
              <p className="text-[11px] font-['Poppins',sans-serif] text-[#8A4050] font-medium">
                {savedItems.length} {savedItems.length === 1 ? 'piece' : 'pieces'} saved for viewing
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close saved items drawer"
            className="p-2 rounded-full hover:bg-[#F3ECE2] text-[#493B35] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {savedItems.length === 0 ? (
            <div className="text-center py-16 px-4 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#E9DDCC]/40 flex items-center justify-center text-[#493B35]/40">
                <Heart className="w-7 h-7" />
              </div>
              <p className="font-['Cormorant_Garamond',serif] text-2xl font-bold text-[#493B35]">
                No pieces saved yet
              </p>
              <p className="text-xs text-[#493B35]/70 max-w-xs mx-auto leading-relaxed">
                Click the heart icon on any piece in our Extended Catalog to curate your personal boutique viewing list.
              </p>
            </div>
          ) : (
            savedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-3 border border-[#E9DDCC] hover:border-[#C9A45C] shadow-xs flex items-center gap-3 transition-all"
              >
                {/* Image */}
                <div
                  className="w-20 h-20 rounded-xl overflow-hidden bg-[#F3ECE2] shrink-0 cursor-pointer"
                  onClick={() => {
                    onSelectPiece(item);
                    onClose();
                  }}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0 space-y-1">
                  <span className="text-[10px] font-['Poppins',sans-serif] uppercase tracking-wider text-[#8A4050] font-semibold block truncate">
                    {item.category}
                  </span>
                  <h4
                    className="font-['Cormorant_Garamond',serif] text-base font-bold text-[#493B35] truncate cursor-pointer hover:text-[#1E4F8F]"
                    onClick={() => {
                      onSelectPiece(item);
                      onClose();
                    }}
                  >
                    {item.title}
                  </h4>
                  
                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => {
                        onBookViewing(item);
                        onClose();
                      }}
                      className="px-2.5 py-1 rounded-full bg-[#1E4F8F] text-white text-[10px] font-['Poppins',sans-serif] font-medium flex items-center gap-1 cursor-pointer whitespace-nowrap"
                    >
                      <Calendar className="w-3 h-3 shrink-0" />
                      <span>Book Viewing</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        onSelectPiece(item);
                        onClose();
                      }}
                      className="px-2 py-1 rounded-full border border-[#E9DDCC] text-[#493B35] text-[10px] font-['Poppins',sans-serif] font-medium flex items-center gap-1 hover:border-[#C9A45C] cursor-pointer whitespace-nowrap"
                    >
                      <Eye className="w-3 h-3 shrink-0" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>

                {/* Delete / Remove */}
                <button
                  type="button"
                  onClick={() => onRemoveItem(item.id)}
                  aria-label="Remove from saved"
                  className="p-2 text-[#493B35]/40 hover:text-rose-600 transition-colors cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedItems.length > 0 && (
          <div className="p-4 bg-white border-t border-[#E9DDCC] space-y-2">
            <button
              type="button"
              onClick={() => {
                onClose();
                onBookViewing(savedItems[0]);
              }}
              className="w-full py-3 px-4 rounded-full bg-[#1E4F8F] hover:bg-[#143868] text-white font-['Poppins',sans-serif] text-xs uppercase tracking-wider font-semibold shadow-md flex items-center justify-center gap-2 cursor-pointer transition-colors whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5 shrink-0" />
              <span>Book Boutique Viewing for Saved Pieces</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
