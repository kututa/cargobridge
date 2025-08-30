import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Package, Truck, ArrowRight } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRole: 'goods' | 'truck' | null;
  onRoleSelect: (role: 'goods' | 'truck') => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, selectedRole, onRoleSelect }) => {
  const roles = [
    {
      id: 'goods' as const,
      title: 'Goods Owner',
      description: 'I have cargo that needs transportation',
      icon: Package,
      color: 'from-blue-600 to-darkblue-800',
      hoverColor: 'from-blue-700 to-darkblue-900'
    },
    {
      id: 'truck' as const,
      title: 'Truck Owner',
      description: 'I have trucks available for hire',
      icon: Truck,
      color: 'from-gray-700 to-black',
      hoverColor: 'from-gray-800 to-gray-900'
    }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-white rounded-2xl p-6 m-4 max-w-md w-full shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content */}
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-black mb-2">
                Choose Your Role
              </h3>
              <p className="text-gray-700">
                Select how you want to use Cargo Bridge
              </p>
            </div>

            <div className="space-y-3">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <motion.button
                    key={role.id}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => onRoleSelect(role.id)}
                    className={`w-full p-4 rounded-xl border-2 transition-all ${
                      selectedRole === role.id
                        ? 'border-darkblue-600 bg-blue-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${role.color}`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1 text-left">
                        <h4 className="font-bold text-black">{role.title}</h4>
                        <p className="text-sm text-gray-700">{role.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-500" />
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {selectedRole && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full bg-gradient-to-r ${
                    selectedRole === 'goods' 
                      ? 'from-blue-600 to-darkblue-800 hover:from-blue-700 hover:to-darkblue-900' 
                      : 'from-gray-700 to-black hover:from-gray-800 hover:to-gray-900'
                  } text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center space-x-2`}
                >
                  <span>Continue as {roles.find(r => r.id === selectedRole)?.title}</span>
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default LoginModal;