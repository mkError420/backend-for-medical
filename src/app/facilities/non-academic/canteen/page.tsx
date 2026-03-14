"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  ChefHat, 
  Coffee, 
  Pizza, 
  Salad, 
  Utensils, 
  Heart, 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle,
  Search,
  Filter,
  ArrowRight,
  CreditCard,
  Truck,
  Package,
  RefreshCw,
  AlertCircle,
  Info,
  Calendar,
  DollarSign,
  Tag,
  BarChart3,
  User,
  Settings,
  Camera,
  Video,
  Image,
  Play,
  Eye
} from "lucide-react"

// Cart item type definition
interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
  description: string
}

export default function CanteenPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showCart, setShowCart] = useState(false)

  const canteenInfo = {
    name: "College Canteen",
    tagline: "Delicious meals, great prices, friendly service",
    established: "2010",
    manager: "Mr. Ahmed Hassan",
    staff: 15,
    description: "The College Canteen provides nutritious, affordable, and delicious meals for students, faculty, and staff. We offer a diverse menu with options for all dietary preferences and budgets.",
    mission: "To serve quality food in a clean, hygienic environment while promoting healthy eating habits and excellent customer service."
  }

  const menuCategories = [
    { id: "all", name: "All Items", icon: <Utensils className="w-4 h-4" /> },
    { id: "breakfast", name: "Breakfast", icon: <Coffee className="w-4 h-4" /> },
    { id: "lunch", name: "Lunch", icon: <Pizza className="w-4 h-4" /> },
    { id: "snacks", name: "Snacks", icon: <Heart className="w-4 h-4" /> },
    { id: "beverages", name: "Beverages", icon: <Coffee className="w-4 h-4" /> },
    { id: "healthy", name: "Healthy Options", icon: <Salad className="w-4 h-4" /> },
    { id: "gallery", name: "Gallery/Videos", icon: <Camera className="w-4 h-4" /> }
  ]

  const menuItems = [
    {
      id: 1,
      name: "Chicken Biryani",
      category: "lunch",
      price: 120,
      description: "Aromatic basmati rice with tender chicken pieces",
      image: "/food/chicken-biryani.jpg",
      rating: 4.5,
      preparationTime: "15 mins",
      dietary: ["non-veg"],
      popular: true,
      nutrition: { calories: 450, protein: 25, carbs: 45 }
    },
    {
      id: 2,
      name: "Vegetable Fried Rice",
      category: "lunch",
      price: 80,
      description: "Fresh vegetables stir-fried with aromatic rice",
      image: "/food/veg-fried-rice.jpg",
      rating: 4.3,
      preparationTime: "10 mins",
      dietary: ["veg"],
      popular: false,
      nutrition: { calories: 320, protein: 8, carbs: 52 }
    },
    {
      id: 3,
      name: "Club Sandwich",
      category: "snacks",
      price: 90,
      description: "Triple-layer sandwich with fresh vegetables and sauce",
      image: "/food/club-sandwich.jpg",
      rating: 4.6,
      preparationTime: "5 mins",
      dietary: ["veg"],
      popular: true,
      nutrition: { calories: 380, protein: 15, carbs: 42 }
    },
    {
      id: 4,
      name: "Fresh Fruit Juice",
      category: "beverages",
      price: 40,
      description: "100% fresh fruit juice of your choice",
      image: "/food/fruit-juice.jpg",
      rating: 4.7,
      preparationTime: "3 mins",
      dietary: ["veg", "vegan"],
      popular: true,
      nutrition: { calories: 120, protein: 1, carbs: 28 }
    },
    {
      id: 5,
      name: "Masala Dosa",
      category: "breakfast",
      price: 60,
      description: "Crispy dosa with spicy potato filling",
      image: "/food/masala-dosa.jpg",
      rating: 4.4,
      preparationTime: "8 mins",
      dietary: ["veg"],
      popular: true,
      nutrition: { calories: 280, protein: 6, carbs: 45 }
    },
    {
      id: 6,
      name: "Grilled Chicken Salad",
      category: "healthy",
      price: 150,
      description: "Fresh greens with grilled chicken and light dressing",
      image: "/food/chicken-salad.jpg",
      rating: 4.8,
      preparationTime: "12 mins",
      dietary: ["non-veg"],
      popular: false,
      nutrition: { calories: 320, protein: 35, carbs: 15 }
    }
  ]

  const specialOffers = [
    {
      id: 1,
      title: "Combo Meal Deal",
      description: "Main dish + drink + dessert",
      discount: "20% OFF",
      validUntil: "2024-12-31",
      items: [1, 4],
      originalPrice: 160,
      discountedPrice: 128
    },
    {
      id: 2,
      title: "Student Special",
      description: "Valid with student ID",
      discount: "15% OFF",
      validUntil: "2024-12-31",
      items: [2, 5],
      originalPrice: 140,
      discountedPrice: 119
    }
  ]

  const galleryItems = [
    {
      id: 1,
      type: "image",
      title: "Canteen Interior",
      description: "Modern and spacious dining area",
      thumbnail: "/gallery/canteen-interior.jpg",
      fullImage: "/gallery/canteen-interior-full.jpg",
      category: "interior"
    },
    {
      id: 2,
      type: "video",
      title: "Food Preparation Process",
      description: "Behind the scenes of our kitchen",
      thumbnail: "/gallery/food-prep-thumb.jpg",
      videoUrl: "/videos/food-preparation.mp4",
      duration: "2:30",
      category: "process"
    },
    {
      id: 3,
      type: "image",
      title: "Signature Dishes",
      description: "Our most popular menu items",
      thumbnail: "/gallery/signature-dishes.jpg",
      fullImage: "/gallery/signature-dishes-full.jpg",
      category: "food"
    },
    {
      id: 4,
      type: "video",
      title: "Student Testimonials",
      description: "What students say about our canteen",
      thumbnail: "/gallery/student-testimonials-thumb.jpg",
      videoUrl: "/videos/student-testimonials.mp4",
      duration: "3:45",
      category: "testimonials"
    },
    {
      id: 5,
      type: "image",
      title: "Fresh Ingredients",
      description: "Quality ingredients for quality food",
      thumbnail: "/gallery/fresh-ingredients.jpg",
      fullImage: "/gallery/fresh-ingredients-full.jpg",
      category: "ingredients"
    },
    {
      id: 6,
      type: "video",
      title: "Canteen Tour",
      description: "Complete tour of our facilities",
      thumbnail: "/gallery/canteen-tour-thumb.jpg",
      videoUrl: "/videos/canteen-tour.mp4",
      duration: "5:00",
      category: "tour"
    }
  ]

  const addToCart = (item: any) => {
    setCart(prevCart => {
      const existingItem = prevCart.find((cartItem: CartItem) => cartItem.id === item.id)
      if (existingItem) {
        return prevCart.map((cartItem: CartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevCart, { ...item, quantity: 1 }]
      }
    })
  }

  const removeFromCart = (itemId: number) => {
    setCart(prevCart => prevCart.filter((item: CartItem) => item.id !== itemId))
  }

  const updateQuantity = (itemId: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeFromCart(itemId)
    } else {
      setCart(prevCart =>
        prevCart.map((item: CartItem) =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      )
    }
  }

  const clearCart = () => {
    setCart([])
  }

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const filteredItems = menuItems.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || selectedCategory === "gallery" || item.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Header */}
      <div className="bg-[#E0E6E4]">
        <div className="responsive-container-full py-20">
          <div className="text-center text-gray-700">
            <div className="mb-8">
              <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Utensils className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-700">{canteenInfo.name}</h1>
              <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto opacity-90 text-gray-700">
                {canteenInfo.tagline}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{canteenInfo.established}</div>
                <div className="text-lg font-medium">Established</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{canteenInfo.manager}</div>
                <div className="text-lg font-medium">Manager</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">{canteenInfo.staff}</div>
                <div className="text-lg font-medium">Staff Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-700 mb-2">4.5★</div>
                <div className="text-lg font-medium">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cart Button */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          onClick={() => setShowCart(!showCart)}
          className="bg-orange-600 hover:bg-orange-700 text-white rounded-full p-4 shadow-lg"
        >
          <ShoppingCart className="w-6 h-6" />
          {getTotalItems() > 0 && (
            <Badge className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
              {getTotalItems()}
            </Badge>
          )}
        </Button>
      </div>

      <div className="responsive-container-full py-12">
        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search for food items..."
                    value={searchTerm}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
                    className="pl-10 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {menuCategories.map(category => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.icon}
                    {category.name}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Special Offers */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Special Offers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {specialOffers.map(offer => (
                <Card key={offer.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                        <p className="text-gray-600 mb-2">{offer.description}</p>
                        <p className="text-sm text-gray-500">Valid until: {offer.validUntil}</p>
                      </div>
                      <Badge className="bg-red-500 text-white">{offer.discount}</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-lg text-gray-400 line-through">৳{offer.originalPrice}</span>
                        <span className="text-2xl font-bold text-orange-600 ml-2">৳{offer.discountedPrice}</span>
                      </div>
                      <Button className="bg-orange-600 hover:bg-orange-700">
                        Add Combo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Menu Items */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Menu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="relative mb-4">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      {item.popular && (
                        <Badge className="absolute top-2 right-2 bg-orange-500 text-white">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-800 mb-1">{item.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="text-sm text-gray-600">{item.rating}</span>
                          <Clock className="w-4 h-4 text-gray-400 ml-2" />
                          <span className="text-sm text-gray-600">{item.preparationTime}</span>
                        </div>
                        <div className="flex gap-2 mb-2">
                          {item.dietary.map(diet => (
                            <Badge key={diet} variant="outline" className="text-xs">
                              {diet}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-orange-600">৳{item.price}</div>
                      </div>
                    </div>
                    <Button 
                      onClick={() => addToCart(item)}
                      className="w-full bg-orange-600 hover:bg-orange-700"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery/Videos Section */}
          {selectedCategory === "gallery" && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Gallery & Videos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryItems.map(item => (
                  <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="relative mb-4">
                        <img 
                          src={item.thumbnail} 
                          alt={item.title}
                          className="w-full h-48 object-cover rounded-lg mb-4"
                        />
                        <div className="absolute top-2 right-2">
                          {item.type === "video" ? (
                            <Badge className="bg-red-500 text-white">
                              <Video className="w-3 h-3 mr-1" />
                              {item.duration}
                            </Badge>
                          ) : (
                            <Badge className="bg-blue-500 text-white">
                              <Image className="w-3 h-3 mr-1" />
                              Image
                            </Badge>
                          )}
                        </div>
                        <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                          {item.type === "video" ? (
                            <Button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4">
                              <Play className="w-6 h-6" />
                            </Button>
                          ) : (
                            <Button className="bg-white/90 hover:bg-white text-gray-800 rounded-full p-4">
                              <Eye className="w-6 h-6" />
                            </Button>
                          )}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <Badge variant="outline" className="text-xs">
                            {item.category}
                          </Badge>
                          <Button variant="outline" size="sm">
                            {item.type === "video" ? "Watch Video" : "View Image"}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Cart Sidebar */}
          {showCart && (
            <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
              <div className="bg-white w-full max-w-md h-full overflow-y-auto">
                <div className="p-6 border-b">
                  <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-gray-800">Your Cart</h2>
                    <Button variant="outline" onClick={() => setShowCart(false)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <div className="p-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-8">
                      <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                      <p className="text-gray-500">Your cart is empty</p>
                    </div>
                  ) : (
                    <>
                      <div className="space-y-4 mb-6">
                        {cart.map(item => (
                          <div key={item.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800">{item.name}</h4>
                              <p className="text-sm text-gray-600">৳{item.price}</p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-4 h-4" />
                              </Button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="border-t pt-4">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-xl font-bold text-gray-800">Total:</span>
                          <span className="text-2xl font-bold text-orange-600">৳{calculateTotal()}</span>
                        </div>
                        <div className="space-y-2">
                          <Button className="w-full bg-orange-600 hover:bg-orange-700">
                            <CreditCard className="w-4 h-4 mr-2" />
                            Proceed to Checkout
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full"
                            onClick={clearCart}
                          >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Clear Cart
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
