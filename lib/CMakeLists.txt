cmake_minimum_required(VERSION 3.0)

project(KFR.JS)
add_executable(module module.c)
add_compile_options(-Wall -Oz)

# Include KFR subdirectory
add_subdirectory(kfrs)

# Add header-only KFR to your executable or library, this sets include directories etc
# target_link_libraries(module kfr)

# Add KFR DFT to your executable or library, (cpp file will be built for this)
# target_link_libraries(module kfr_dft)

# Add KFR IO to your executable or library, (cpp file will be built for this)
# target_link_libraries(module kfr_io)