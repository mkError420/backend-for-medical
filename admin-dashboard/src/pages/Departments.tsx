import React, { useState, useEffect } from 'react';
import { Plus, Search, Edit, Trash2, Building, Users } from 'lucide-react';
import { departmentsAPI } from '../services/api';
import { Department, PaginationParams } from '../types';

const Departments: React.FC = () => {
  const [departments, setDepartments] = useState<Department[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 10,
    total: 0,
    pages: 0,
  });
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [editingDepartment, setEditingDepartment] = useState<Department | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    headOfDepartment: '',
    facilities: [] as string[],
    newFacility: '',
  });

  useEffect(() => {
    fetchDepartments();
  }, [searchTerm, pagination.page]);

  const fetchDepartments = async () => {
    try {
      setLoading(true);
      const params: PaginationParams = {
        page: pagination.page,
        limit: pagination.limit,
        search: searchTerm,
      };

      const response = await departmentsAPI.getAll(params);
      setDepartments(response.data);
      setPagination(response.pagination || pagination);
    } catch (error) {
      console.error('Failed to fetch departments:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const dataToSubmit = {
        ...formData,
        facilities: formData.facilities.filter(f => f.trim() !== ''),
      };

      if (editingDepartment) {
        await departmentsAPI.update(editingDepartment._id, dataToSubmit);
      } else {
        await departmentsAPI.create(dataToSubmit);
      }

      setShowCreateModal(false);
      setEditingDepartment(null);
      setFormData({
        name: '',
        description: '',
        headOfDepartment: '',
        facilities: [],
        newFacility: '',
      });
      fetchDepartments();
    } catch (error) {
      console.error('Failed to save department:', error);
    }
  };

  const handleEdit = (department: Department) => {
    setEditingDepartment(department);
    setFormData({
      name: department.name,
      description: department.description,
      headOfDepartment: department.headOfDepartment,
      facilities: department.facilities,
      newFacility: '',
    });
    setShowCreateModal(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this department?')) {
      try {
        await departmentsAPI.delete(id);
        fetchDepartments();
      } catch (error) {
        console.error('Failed to delete department:', error);
      }
    }
  };

  const addFacility = () => {
    if (formData.newFacility.trim() && !formData.facilities.includes(formData.newFacility.trim())) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, formData.newFacility.trim()],
        newFacility: '',
      });
    }
  };

  const removeFacility = (index: number) => {
    setFormData({
      ...formData,
      facilities: formData.facilities.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Departments</h1>
          <p className="text-gray-600 mt-2">Manage departments and facilities</p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="btn btn-primary h-10"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </button>
      </div>

      {/* Search */}
      <div className="card">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search departments..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input pl-10"
          />
        </div>
      </div>

      {/* Departments List */}
      <div className="card">
        {loading ? (
          <div className="flex justify-center py-8">
            <div className="w-8 h-8 border-4 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : departments.length === 0 ? (
          <div className="text-center py-8">
            <Building className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500">No departments found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((department) => (
              <div key={department._id} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Building className="h-5 w-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{department.name}</h3>
                      <p className="text-sm text-gray-500">Head: {department.headOfDepartment}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleEdit(department)}
                      className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(department._id)}
                      className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{department.description}</p>
                
                {department.facilities.length > 0 && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <Users className="h-4 w-4" />
                      <span>Facilities ({department.facilities.length})</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {department.facilities.slice(0, 3).map((facility, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {facility}
                        </span>
                      ))}
                      {department.facilities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{department.facilities.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}
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
                {editingDepartment ? 'Edit Department' : 'Add New Department'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Head of Department
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.headOfDepartment}
                    onChange={(e) => setFormData({ ...formData, headOfDepartment: e.target.value })}
                    className="input"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Facilities
                  </label>
                  <div className="space-y-2">
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={formData.newFacility}
                        onChange={(e) => setFormData({ ...formData, newFacility: e.target.value })}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFacility())}
                        className="input flex-1"
                        placeholder="Add a facility"
                      />
                      <button
                        type="button"
                        onClick={addFacility}
                        className="btn btn-secondary h-10"
                      >
                        Add
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {formData.facilities.map((facility, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full flex items-center gap-1"
                        >
                          {facility}
                          <button
                            type="button"
                            onClick={() => removeFacility(index)}
                            className="text-gray-500 hover:text-red-500"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1"
                  >
                    {editingDepartment ? 'Update Department' : 'Add Department'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowCreateModal(false);
                      setEditingDepartment(null);
                      setFormData({
                        name: '',
                        description: '',
                        headOfDepartment: '',
                        facilities: [],
                        newFacility: '',
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

export default Departments;
