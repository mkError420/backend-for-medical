import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Eye, Filter } from 'lucide-react';
import { noticesAPI } from '../services/api';
import { Notice, PaginationParams } from '../types';

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'general' as 'general' | 'academic' | 'emergency' | 'event',
    date: new Date().toISOString().split('T')[0],
    attachment: '',
  });

  const categories = [
    { value: 'general', label: 'General', color: 'bg-gray-100 text-gray-800' },
    { value: 'academic', label: 'Academic', color: 'bg-blue-100 text-blue-800' },
    { value: 'emergency', label: 'Emergency', color: 'bg-red-100 text-red-800' },
    { value: 'event', label: 'Event', color: 'bg-green-100 text-green-800' },
  ];

  useEffect(() => {
    fetchNotices();
  }, [searchTerm, selectedCategory, pagination.page]);

  const fetchNotices = async () => {
    try {
      setLoading(true);
      const params: PaginationParams = {
        page: pagination.page,
        limit: pagination.limit,
        search: searchTerm,
      };
      
      if (selectedCategory) {
        (params as any).category = selectedCategory;
      }

      const response = await noticesAPI.getAll(params);
      setNotices(response.data);
      setPagination(response.pagination || pagination);
    } catch (error) {
      console.error('Failed to fetch notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingNotice) {
        await noticesAPI.update(editingNotice._id, formData);
      } else {
        await noticesAPI.create(formData);
      }
      
      setShowCreateModal(false);
      setEditingNotice(null);
      setFormData({
        title: '',
        description: '',
        category: 'general',
        date: new Date().toISOString().split('T')[0],
        attachment: '',
      });
      fetchNotices();
    } catch (error) {
      console.error('Failed to save notice:', error);
    }
  };

  const handleEdit = (notice: Notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      description: notice.description,
      category: notice.category,
      date: new Date(notice.date).toISOString().split('T')[0],
      attachment: notice.attachment || '',
    });
    setShowCreateModal(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await noticesAPI.delete(id);
        fetchNotices();
      } catch (error) {
        console.error('Failed to delete notice:', error);
      }
    }
  };

  const getCategoryColor = (category: string) => {
    const cat = categories.find(c => c.value === category);
    return cat?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notices</h1>
          <p className="text-gray-600 mt-2">Manage college notices and announcements</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn btn-primary h-10"
        >
          <Plus className="h-4 w-4 mr-2" />
          Create Notice
        </button>
      </div>

      {/* Filters */}
      <div className="card">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="input pl-10"
              />
            </div>
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="input w-full sm:w-48"
          >
            <option value="">All Categories</option>
            {categories.map(cat => (
              <option key={cat.value} value={cat.value}>{cat.label}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Notices List */}
      <div className="card">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : notices.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No notices found</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notices.map((notice) => (
              <div key={notice._id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{notice.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(notice.category)}`}>
                        {categories.find(c => c.value === notice.category)?.label}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{notice.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>Date: {new Date(notice.date).toLocaleDateString()}</span>
                      {notice.attachment && (
                        <span className="text-blue-600 hover:underline cursor-pointer">
                          View Attachment
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => handleEdit(notice)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {pagination.pages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page - 1 }))}
              disabled={pagination.page === 1}
              className="btn btn-secondary h-8 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-sm text-gray-600">
              Page {pagination.page} of {pagination.pages}
            </span>
            <button
              onClick={() => setPagination(prev => ({ ...prev, page: prev.page + 1 }))}
              disabled={pagination.page === pagination.pages}
              className="btn btn-secondary h-8 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Create/Edit Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                {editingNotice ? 'Edit Notice' : 'Create New Notice'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="input"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                      className="input"
                    >
                      {categories.map(cat => (
                        <option key={cat.value} value={cat.value}>{cat.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Attachment URL (optional)
                  </label>
                  <input
                    type="text"
                    value={formData.attachment}
                    onChange={(e) => setFormData({ ...formData, attachment: e.target.value })}
                    className="input"
                    placeholder="https://example.com/file.pdf"
                  />
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1"
                  >
                    {editingNotice ? 'Update Notice' : 'Create Notice'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditingNotice(null);
                      setFormData({
                        title: '',
                        description: '',
                        category: 'general',
                        date: new Date().toISOString().split('T')[0],
                        attachment: '',
                      });
                    }}
                    className="btn btn-secondary flex-1"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notices;
