<button {{ $attributes->merge(['type' => 'submit', 'class' => 'bg-white mr-2 border border-blue-dark rounded-xl px-4 py-1 hover:bg-blue-dark hover:text-white items-center']) }}>
    {{ $slot }}
</button>
